import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-75c78.firebaseapp.com",
  projectId: "authexamnotes-75c78",
  storageBucket: "authexamnotes-75c78.firebasestorage.app",
  messagingSenderId: "784960030975",
  appId: "1:784960030975:web:266dc34cf6d0b26fc524ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth, provider}