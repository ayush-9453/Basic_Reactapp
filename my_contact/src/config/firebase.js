
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAUPtCn6cDdHnRPp12HhPH3kOj83ipNtHg",
  authDomain: "vite-contact-6cda9.firebaseapp.com",
  projectId: "vite-contact-6cda9",
  storageBucket: "vite-contact-6cda9.appspot.com",
  messagingSenderId: "15813561275",
  appId: "1:15813561275:web:c6f416d7907c275668d29e"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);