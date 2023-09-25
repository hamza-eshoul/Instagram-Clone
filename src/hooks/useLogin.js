import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      // log the user in
      const res = await signInWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error("Could not complete signup");
      }

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

  return { login, error, isPending };
};
