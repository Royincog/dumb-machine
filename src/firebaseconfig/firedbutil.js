import { db } from "./firebaseconfig";
import {
  doc,
  updateDoc,
  getDoc,
  setDoc,
  getDocs,
  query,
  collection,
  onSnapshot,
} from "firebase/firestore";
import useSWR from "swr";
import { useState, useEffect } from "react";

const likeDocRef = doc(db, "likes", "lTMZpXLROjJruTwjDErv");

export const incrementLikeCount = async () => {
  const docSnap = await getDoc(likeDocRef);
  if (docSnap.exists()) {
    await updateDoc(likeDocRef, {
      websiteLikes: docSnap.data().websiteLikes + 1,
    });
  } else {
    await setDoc(likeDocRef, { websiteLikes: 1 });
  }
};

export const getLikeCount = async () => {
  const docSnap = await getDoc(likeDocRef);
  if (docSnap.exists()) {
    return docSnap.data().websiteLikes;
  } else {
    return 0;
  }
};

export async function doesDocumentExist(collectionName, docId) {
  const docRef = doc(db, collectionName, docId);
  const docSnapshot = await getDoc(docRef);
  return docSnapshot.exists();
}
// A function to fetch documents from Firestore
const fetchCollectionData = async (collectionName) => {
  const q = query(collection(db, collectionName));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
};

// Custom hook using SWR for data fetching and caching
export const useCollection = (collectionName) => {
  const { data, error, mutate } = useSWR(collectionName, () =>
    fetchCollectionData(collectionName)
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
export const useRealtimeCollection = (collectionName) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const q = query(collection(db, collectionName));
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(documents);
        setIsLoading(false);
      },
      (err) => {
        console.error("Failed to subscribe to collection:", err);
        setError(err);
        setIsLoading(false);
      }
    );

    return () => unsubscribe(); // Clean up on unmount
  }, [collectionName]); // Re-run the effect if collectionName changes

  return { data, isLoading, error };
};
