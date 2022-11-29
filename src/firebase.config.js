// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArJPqqqEkm3s1YG9vrmvTXy5TP_iucgbA",
  authDomain: "housing-marketplace-app-116ac.firebaseapp.com",
  projectId: "housing-marketplace-app-116ac",
  storageBucket: "housing-marketplace-app-116ac.appspot.com",
  messagingSenderId: "611611244963",
  appId: "1:611611244963:web:4b4b55ddac99f438150216",
  measurementId: "G-FEJ3T136XL",
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
