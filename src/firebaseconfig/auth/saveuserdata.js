import { db } from "../firebaseconfig";
import { doc, getDoc, setDoc, arrayUnion, updateDoc } from "firebase/firestore";

export const saveUserDataToFireBase = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth?.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email, uid } = userAuth;
    //Cutting it short
    const userImage = `https://api.dicebear.com/7.x/notionists/svg?seed=${displayName.substring(
      0,
      2
    )}&scale=200`;
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
  const userImage = `https://api.dicebear.com/7.x/notionists/svg?seed=${displayName.substring(
    0,
    2
  )}&scale=200`;
  try {
    await setDoc(
      userDocRef,
      {
        displayName,
        email,
        uid,
        testimonial,
        userImage,
        updatedAt: new Date(),
      },
      { merge: true }
    ); // This option merges the update into the existing document
    console.log("Testimonial saved successfully");
  } catch (error) {
    console.error("Error saving testimonial:", error);
  }
};

export const saveUserCommentsToFireBase = async (userAuth, newComment) => {
  const userDocRef = doc(db, "users", userAuth?.uid);
  const { displayName, email, uid } = userAuth;
  const userImage = `https://api.dicebear.com/7.x/notionists/svg?seed=${displayName.substring(
    0,
    2
  )}&scale=200`;

  try {
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      const userData = userDoc.data();
      const existingComments = userData.comments || [];
      const existingCommentIndex = existingComments.findIndex(
        (comment) => comment.blogId === newComment.blogId
      );

      if (existingCommentIndex !== -1) {
        // Comment exists, update it
        const updatedComments = [...existingComments];
        updatedComments[existingCommentIndex] = newComment; // Replace with the new comment
        await updateDoc(userDocRef, { comments: updatedComments });
      } else {
        // Comment does not exist, add it
        await updateDoc(userDocRef, {
          comments: arrayUnion(newComment),
        });
      }
    } else {
      // Document does not exist, create it with the new comment
      await setDoc(userDocRef, {
        displayName,
        email,
        uid,
        userImage,
        updatedAt: new Date(),
        comments: [newComment],
      });
    }

    console.log("Comment saved or updated successfully");
  } catch (error) {
    console.error("Error saving or updating comment:", error);
  }
};
