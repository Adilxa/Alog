import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  where,
  updateDoc,
} from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../firebase/firebase";

const useUser = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getDetail = useCallback(async (id) => {
    const docRef = doc(db, "users", id);
    const res = await getDoc(docRef);
    setLoading(false);
    if (res.exists()) {
      setUser(res.data());
    } else {
      alert("");
    }
  }, []);

  const addToCart = async (id, data) => {
    const ref = doc(db, "users", id);
    const res = await updateDoc(ref, data);
    return res;
  };

  return {
    isLoading,
    getDetail,
    user,
    addToCart,
  };
};

export default useUser;
