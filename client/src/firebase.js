import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "joytube-9999.firebaseapp.com",
  projectId: "joytube-9999",
  storageBucket: "joytube-9999.appspot.com",
  messagingSenderId: "617710220035",
  appId: "1:617710220035:web:53c7226c417ee1d5feef36",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
