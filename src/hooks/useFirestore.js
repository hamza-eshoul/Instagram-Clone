import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";

export const useFirestore = (col) => {
  const colRef = collection(db, col);

  // add document
  const addDocument = async (doc) => {
    try {
      await addDoc(colRef, {
        ...doc,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  // update document
  const updateDocument = async (id, updates) => {
    try {
      const docRef = doc(db, col, id);

      await updateDoc(docRef, updates);
    } catch (err) {
      return null;
    }
  };

  // delete document
  const deleteDocument = async (id) => {
    const docRef = doc(db, col, id);

    try {
      await deleteDoc(docRef);
    } catch (err) {
      console.log(err.message);
    }
  };

  return { addDocument, updateDocument, deleteDocument };
};
