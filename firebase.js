// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxIakoDOQYICyqwMKscpKnXaZBBpNZLmc",
  authDomain: "my-react-notes-app.firebaseapp.com",
  projectId: "my-react-notes-app",
  storageBucket: "my-react-notes-app.appspot.com",
  messagingSenderId: "572909788778",
  appId: "1:572909788778:web:58866320433f85d75a3413",
  measurementId: "G-NYRKEXWSJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");