import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../providers/FirebaseProvider";

const BuildingList = () => {
  const [buildings, setBuildings] = useState([]);
  const fetchPost = async () => {
    await getDocs(collection(db, "buildings")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBuildings(newData);
      console.log(buildings, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return <div></div>;
};

export default BuildingList;
