import { db } from "./firebaseconfig";
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";

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