import { useEffect, useRef, useState } from "react";
import { db } from "../firebase/config";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";

export const useCollection = (col, _queryArgs, _orderArgs) => {
  const [documents, setDocuments] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const queryArgs = useRef(_queryArgs).current;
  const orderArgs = useRef(_orderArgs).current;

  useEffect(() => {
    setIsPending(true);
    let colRef = collection(db, col);

    if (queryArgs) {
      const q = query(collection(db, col), where(...queryArgs));
      colRef = q;
    }

    if (orderArgs && !queryArgs) {
      const order_q = query(collection(db, col), orderBy(...orderArgs));
      colRef = order_q;
    }

    if (orderArgs && queryArgs) {
      const order_q = query(
        collection(db, col),
        where(...queryArgs),
        orderBy(...orderArgs)
      );
      colRef = order_q;
    }

    const unsub = onSnapshot(
      colRef,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(results);
        setIsPending(false);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("Could not fetch the data");
      }
    );

    return () => {
      unsub();
    };
  }, [col, queryArgs]);

  return { documents, isPending, error };
};
