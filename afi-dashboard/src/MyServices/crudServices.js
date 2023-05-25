import { addDoc, collection, getDocs, doc, deleteDoc, updateDoc, getCountFromServer } from "firebase/firestore";
import db from "../MyServices/firebaseService";


//Read database
export async function getData() {
  const myCollection = collection (db, "afiCollection");
  const myDocuments = await getDocs (myCollection); 
 

  const result = myDocuments.docs.map((doc)=>{
    return {id: doc.id, ...doc.data()}
  })
  
  return result;
}

//Count documents
export async function getBookingNumber() {
  const myCollection = collection (db, "afiCollection");  
  const snapshot = await getCountFromServer(myCollection);
  

  const bookingNumber = ('count: ', snapshot.data().count);
  
  return bookingNumber;
}



//Add record
export async function addRecord(record){
  const myCollection = collection (db, "afiCollection")
  const docRef = await addDoc(myCollection, record)
  console.log("Dokument added with ID:", docRef.id)
}


//Delete Record
export async function deleteRecord(record){
  const myCollection = collection (db, "afiCollection")

  const docRef = await doc(myCollection, record.id)

  deleteDoc(docRef)
  console.log("Dokument deleted with ID:", docRef.id)
}


//Update Record
export async function updateRecord(record){
  const myCollection = collection (db, "afiCollection") 

  const docRef = await doc(myCollection, record.id)

  updateDoc(docRef, {
    name:record.name,
    surname:record.surname,
    email:record.email,   
    room:record.room,
    arrival:record.arrival,
    departure:record.departure,
    guests:record.guests,
    pets:record.pets
  })



  console.log("Dokument updated with ID:", docRef.id)
}
