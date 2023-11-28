import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useDemoLogin = () => {
  const [demoError, setDemoError] = useState(null);
  const [isDemoPending, setIsDemoPending] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const demoLogin = async (email, password) => {
    setDemoError(null);
    setIsDemoPending(true);

    try {
      // log the user in
      const res = await signInWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      //   dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });
      setIsDemoPending(false);
      setDemoError(null);
      navigate("/homepage");
    } catch (err) {
      setDemoError(err.message);
      setIsDemoPending(false);
    }
  };

  return { demoLogin, demoError, isDemoPending };
};
