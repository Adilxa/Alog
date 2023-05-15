import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../firebase/firebase";

const useCart = () => {
  const [isLoading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const getElements = useCallback(async () => {
    const arr = [];
    const data = await getDocs(collection(db, "cart"));
    data.forEach((doc) => {
      arr.push({ ...doc.data() });
    });
    setCart(arr);
    setLoading(false);
  }, []);

  const addToCart = useCallback(async (data) => {
    await addDoc(collection(db, "cart"), {
      ...data,
    });
  }, []);

  return {
    isLoading,
    getElements,
    cart,
    addToCart,
  };
};

export default useCart;
