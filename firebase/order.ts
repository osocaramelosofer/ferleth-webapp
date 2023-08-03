// Firebase Imports
import {addDoc, collection, runTransaction} from "firebase/firestore";
import {db} from "~/firebase/index";
import {Order, Stole} from "~/types/Order";

// Add a new order
const submitOrder = async (order: Order) => {
  try {
    const docRef = await addDoc<Order>(collection(db, "orders"), order);
    console.log("Document written with ID: ", docRef.id);
    await setOrderNumberUID(docRef, docRef.id)
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Update the order.orderNumber with the documentID of the doc that just created
async function setOrderNumberUID(sfDocRef, orderUID){
  try {
    await runTransaction(db, async (transaction) => {
      const sfDoc = await transaction.get(sfDocRef);
      if (!sfDoc.exists()) {
        throw "Document does not exist!";
      }

      const newOrderNumber = sfDoc.data().orderNumber = orderUID;
      transaction.update(sfDocRef, { orderNumber: newOrderNumber });
    });
    console.log("Transaction successfully committed!");
  } catch (e) {
    console.log("Transaction failed: ", e);
  }
}


// Add a new stole
const submitStole = async (stole: Stole) => {
  try{
    const docRef = await addDoc<Stole>(collection(db,"stoles"), stole);
    console.log("Stole has added successfully. Stole id: ", docRef.id);
  }catch(e){
    console.error("There was an error adding the stole to firebase: ", e);
  }
}



export { setOrderNumberUID, submitOrder, submitStole }
