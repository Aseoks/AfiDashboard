import { addDoc, collection, getDocs, doc, deleteDoc, updateDoc, query, where } from "firebase/firestore";
import db from "../MyServices/firebaseService";


//Read database
export async function getData() {
  const myCollection = collection (db, "afiCollection");
  const myDocuments = await getDocs (myCollection);
  myDocuments.docs.map((doc) => {
    // console.log(doc.data())
    
  })

  const result = myDocuments.docs.map((doc)=>{
    return {id: doc.id, ...doc.data()}
  })
  
  return result;
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


//Filter Records
export async function getRecordsByCategory(categryName){
  const myCollection = collection (db, "afiCollection") 
  const q = query(myCollection, where("category","==",categryName))
  const querySnapshot = await getDocs(q)
  const result = querySnapshot.docs.map((doc) => {
    // console.log(mydoc.id, "=>", mydoc.data())

    return{id:doc.id,...doc.data()}
  })

  return result
}