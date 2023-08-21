// Firebase Imports
import {addDoc, collection, runTransaction, getDoc, doc} from "firebase/firestore";
import {db} from "~/firebase";
import {Order, Stole} from "~/types/Order";
import {throws} from "assert";
import {orderConverter} from "~/helpers/firebase-converters/orderConverter";
import {stoleConverter} from "~/helpers/firebase-converters/stoleConverter";

// Add a new order
const submitOrder = async (order: Order) => {
  try {
    const docRef = await addDoc<Order>(collection(db, "orders"), order);
    await setOrderNumberUID(docRef, docRef.id)
    console.log("Order submitted successfully, Document with ID: ", docRef.id);
    return docRef
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
    console.log("Transaction successfully committed!, orderNumberUID set correctly");
  } catch (e) {
    console.log("Error setting up the orderNumberId to the Order: ", e);
  }
}

async function setStoleUID(sfDocRef, stoleUID){
  try {
    await runTransaction(db, async(transaction)=>{
      const sfDoc = await transaction.get(sfDocRef)
      if (!sfDoc.exists()) {
        throw "Document does not exist!";
      }
      const docOrderUpdated = sfDoc.data().stoleUID = stoleUID
      transaction.update(sfDocRef, {stoleUID: docOrderUpdated})
    })
  }catch (e) {
    console.log("We couldn't set up the stoleUID from the order document", e);
  }
}


// Add a new stole
const submitStole = async (stole: Stole) => {
  try{
    const docRef = await addDoc<Stole>(collection(db,"stoles"), stole);
    console.log("Stole was added successfully. Stole id: ", docRef.id);
    return docRef
  }catch(e){
    console.error("There was an error adding the stole to firebase: ", e);
    return false
  }
}

const getOrderDetail = async( documentReference: String ) => {
  try {
    const docRef = doc(db, "orders", documentReference).withConverter(orderConverter)
    const docSnap = await getDoc(docRef)
    if(docSnap.exists()){
      return docSnap.data()
    }
  }catch (e) {
    throw "no such document in orders collection"
  }
}
const getStoleDetail = async (documentReference: String) => {
  try {
    const docRef = doc(db,"stoles",documentReference).withConverter(stoleConverter)
    const docSnap = await getDoc(docRef)
    if(docSnap.exists()){
      return docSnap.data()
    }
  }catch (e) {
    throw "Document does not exist!";
  }
}


export { setOrderNumberUID, submitOrder, submitStole, getOrderDetail, setStoleUID, getStoleDetail }
