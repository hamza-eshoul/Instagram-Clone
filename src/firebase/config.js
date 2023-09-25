import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase Initialization

const firebaseConfig = {
  apiKey: "AIzaSyA-C_jwbSxoL1hspuHvGNpMEwEGE4ukY1U",
  authDomain: "instagram-clone-c9891.firebaseapp.com",
  projectId: "instagram-clone-c9891",
  storageBucket: "instagram-clone-c9891.appspot.com",
  messagingSenderId: "470836582010",
  appId: "1:470836582010:web:15d1cad66a3d8b896b4dc3",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Export firestore database
// It will be imported into your react app whenever it is needed

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();
