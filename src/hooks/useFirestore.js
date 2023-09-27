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

  // const updateProfilePosts = async () => {
    // const docToAdd = {
    //   postAuthor: prof,
    //   postImgUrl:
    //     "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Fachrafpost.jpg?alt=media&token=cabeeb3e-4035-4914-98da-71ba2c7f8774",
    //   postLikes: 22,
    //   postCaption:
    //     "An honor to receive this award and share it with my people ❤️",

    //   postComments: [
    //     {
    //       commentAuthor: "Lindoro Gomes",
    //       commentImgUrl: "https://randomuser.me/api/portraits/med/men/86.jpg",
    //       commentContent: "Brave 👏👏well deserved ❤️🇲🇦",
    //     },
    //     {
    //       commentImgUrl: "https://randomuser.me/api/portraits/med/women/16.jpg",
    //       commentAuthor: "Bratislava Marinković",
    //       commentContent: "You really deserve it ❤️🇲🇦",
    //     },
    //     {
    //       commentAuthor: "Amelia Williams",
    //       commentContent: "Félicitations @achrafhakimi 👏❤️💙",
    //       commentImgUrl: "https://randomuser.me/api/portraits/med/women/25.jpg",
    //     },
    //     {
    //       commentContent: "MashAllah🇲🇦🤞🏽",
    //       commentAuthor: "Manar De Bel",
    //       commentImgUrl: "https://randomuser.me/api/portraits/med/women/46.jpg",
    //     },
    //   ],
    //   postTime: "1day",
    //   isPostLiked: false,
    // };

  //   console.log(profile, docToAdd);

  //   await addDocument(docToAdd);
  // };
};
