import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../firebase/firebase";

const useMans = () => {
  const [mans, setMans] = useState([]);
  const [menDetail, setDetail] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getMans = useCallback(async () => {
    const arr = [];
    const data = await getDocs(collection(db, "m_sneakers"));
    data.forEach((doc) => {
      arr.push({ tid: doc.id, ...doc.data() });
    });
    setLoading(false);
    setMans(arr);
  }, []);

  const getManDetail = async (id) => {
    const docRef = doc(db, "m_sneakers", id);
    const res = await getDoc(docRef);
    setLoading(false);
    if (res.exists()) {
      setDetail(res.data());
    } else {
      alert("Have no Weather");
    }
  };

  return {
    isLoading,
    getMans,
    mans,
    getManDetail,
    menDetail,
  };
};

export default useMans;
