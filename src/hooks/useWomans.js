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

const useWomans = () => {
  const [womans, setWomans] = useState([]);
  const [womanDetail, setDetail] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [clothes, setClothes] = useState([]);

  const getWomans = useCallback(async () => {
    const arr = [];
    const data = await getDocs(collection(db, "w_sneakers"));
    data.forEach((doc) => {
      arr.push({ tid: doc.id, ...doc.data() });
    });
    setLoading(false);
    setWomans(arr);
  }, []);

  const getWomansClothes = useCallback(async () => {
    const arr = [];
    const data = await getDocs(collection(db, "woman"));
    data.forEach((doc) => {
      arr.push({ tid: doc.id, ...doc.data() });
    });
    setLoading(false);
    setClothes(arr);
  }, []);

  const getWomanDetail = async (id) => {
    const docRef = doc(db, "woman", id);
    const res = await getDoc(docRef);
    setLoading(false);
    if (res.exists()) {
      setDetail(res.data());
    } else {
      alert("");
    }
  };
  return {
    isLoading,
    getWomans,
    womans,
    getWomanDetail,
    womanDetail,
    getWomansClothes,
    clothes,
  };
};

export default useWomans;
