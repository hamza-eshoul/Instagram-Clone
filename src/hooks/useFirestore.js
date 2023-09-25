import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const useFirestore = (col) => {
  // update document
  const updateDocument = async (id, updates) => {
    try {
      const docRef = doc(db, col, id);

      await updateDoc(docRef, updates);
    } catch (err) {
      return null;
    }
  };

  return { updateDocument };
};
