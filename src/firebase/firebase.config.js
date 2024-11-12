// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWBMiAu-uSTkaHbZe6w0yieE_VYyXmMDY",
  authDomain: "book-vibe-d4707.firebaseapp.com",
  projectId: "book-vibe-d4707",
  storageBucket: "book-vibe-d4707.firebasestorage.app",
  messagingSenderId: "829832794249",
  appId: "1:829832794249:web:8960ee4fc771863ea8f658"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);