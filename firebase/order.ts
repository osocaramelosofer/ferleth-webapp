import {addDoc, collection, runTransaction} from "firebase/firestore";
import {db} from "~/firebase/index";
import {Order} from "~/types/Order";

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

const submitOrder = async (order: Order) => {
  try {
    const docRef = await addDoc<Order>(collection(db, "orders"), order);
    console.log("Document written with ID: ", docRef.id);
    await setOrderNumberUID(docRef, docRef.id)
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export { setOrderNumberUID, submitOrder }
