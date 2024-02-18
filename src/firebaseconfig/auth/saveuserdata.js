import { db } from "../firebaseconfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const saveUserDataToFireBase = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth?.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email, uid } = userAuth;
    const userImage = `https://api.dicebear.com/7.x/notionists/svg?seed=${displayName}&scale=200`;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        userImage,
      });
      return { userAlreadyExist: false, uid };
    } catch (error) {
      console.log(error);
    }
  } else {
    return { userAlreadyExist: true, uid: userAuth?.uid };
  }
};

export const saveUserTestimonialToFireBase = async (userAuth, testimonial) => {
  const userDocRef = doc(db, "users", userAuth?.uid);
  const { displayName, email, uid } = userAuth;
  try {
    await setDoc(
      userDocRef,
      { displayName, email, uid, testimonial, updatedAt: new Date() },
      { merge: true }
    ); // This option merges the update into the existing document
    console.log("Testimonial saved successfully");
  } catch (error) {
    console.error("Error saving testimonial:", error);
  }
};
