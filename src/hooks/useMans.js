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

const useMans = () => {
  const [mans, setMans] = useState([]);
  const [manDetail, setDetail] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [clothes, setClothes] = useState([]);

  const getMans = useCallback(async () => {
    const arr = [];
    const data = await getDocs(collection(db, "m_sneakers"));
    data.forEach((doc) => {
      arr.push({ tid: doc.id, ...doc.data() });
    });
    setLoading(false);
    setMans(arr);
  }, []);

  const getMansClothes = useCallback(async () => {
    const arr = [];
    const data = await getDocs(collection(db, "man"));
    data.forEach((doc) => {
      arr.push({ tid: doc.id, ...doc.data() });
    });
    setLoading(false);
    setClothes(arr);
  }, []);

  const getManDetail = async (id) => {
    const docRef = doc(db, "man", id);
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
    getMans,
    mans,
    getManDetail,
    manDetail,
    getMansClothes,
    clothes,
  };
};

export default useMans;
