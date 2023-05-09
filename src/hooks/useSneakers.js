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

const useSneakers = () => {
  const [sneakers, setSneakers] = useState([]);
  const [isLoading , setLoading] = useState(true);

  const getSneakers = useCallback(async () => {
    const arr = [];
    const data = await getDocs(collection(db, "sneakers"));
    data.forEach((doc) => {
      arr.push({ tid: doc.id, ...doc.data() });
    });
    setLoading(false);
    setSneakers(arr);
  }, []);

  // const getBlog = async (id) => {
  //   const docRef = doc(db, "blog", id);
  //   const res = await getDoc(docRef);
  //   setLoading(false);
  //   if (res.exists()) {
  //     setDetailBlog(res.data());
  //   } else {
  //     alert("Have no blogs");
  //   }
  // };

  return {
    isLoading,
    getSneakers,
    sneakers,
  };
};

export default useSneakers;
