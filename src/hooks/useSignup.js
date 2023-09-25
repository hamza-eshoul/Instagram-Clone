import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (email, password, username) => {
    setError(null);
    setIsPending(true);

    try {
      // signup
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // add display name to user
      await updateProfile(auth.currentUser, {
        displayName: username,
      });

      //   create a user document
      const docRef = doc(db, "profiles", username);
      await setDoc(docRef, {
        nbrFollowers: 0,
        nbrFollowing: 0,
        nbrPosts: 0,
        profileName: username,
        photoURL: "",
      });

      //   dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });
      setIsPending(false);
      setError(null);
      navigate("/homepage");
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { signup, error, isPending };
};
