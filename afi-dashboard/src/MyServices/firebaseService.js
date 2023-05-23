import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD0SFZvmtePkFYmrNd23mj3iXIvAciWxD8",
  authDomain: "projekt1-fbe80.firebaseapp.com",
  projectId: "projekt1-fbe80",
  storageBucket: "projekt1-fbe80.appspot.com",
  messagingSenderId: "1058348984994",
  appId: "1:1058348984994:web:952c95e3fce40a4754c5fb",
  measurementId: "G-T8L7T29LG7"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;