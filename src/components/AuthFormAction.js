import React, { useEffect, useState } from "react";
import Button from "./Button";
import Form from "./Form";
import { useUser } from "../contexts/UserProvider";
import { saveUserDataToFireBase } from "../firebaseconfig/auth/saveuserdata";
import { signInWithGooglePopUp } from "../firebaseconfig/auth/authconfig";
import { doesDocumentExist } from "../firebaseconfig/firedbutil";
import LoadingDots from "./LoadingDots";

function AuthFormAction() {
  const { currentUser, mutate } = useUser();
  const [loading, setLoading] = useState(true);
  const [userAlreadyExists, setUserAlreadyExists] = useState(false);

  useEffect(() => {
    async function checkUserAndExistence() {
      if (currentUser === undefined) {
        // User state not initialized yet
        return;
      }
      setLoading(true); // Re-enable loading state when checking new user data
      if (currentUser !== null) {
        // User is signed in, check if they exist in your database
        const exists = await doesDocumentExist("users", currentUser.uid);
        setUserAlreadyExists(exists);
      } else {
        // No user signed in
        setUserAlreadyExists(false);
      }
      setLoading(false); // Loading is complete
    }

    checkUserAndExistence();
  }, [currentUser]);

  //On click of login Button
  const loginUser = async () => {
    try {
      const { user } = await signInWithGooglePopUp();
      const exists = await doesDocumentExist("users", user.uid);
      if (!exists) {
        await saveUserDataToFireBase(user); // Save new user data
      }
      mutate();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <LoadingDots />;
  }

  return (
    <React.Fragment>
      {!currentUser && <Button text="sign-in" onClick={loginUser} />}
      {userAlreadyExists && currentUser ? (
        <p className="font-semibold">
          Thanks already for your dumb appreciation ☕🦩
        </p>
      ) : currentUser ? (
        <Form />
      ) : null}
    </React.Fragment>
  );
}

export default AuthFormAction;
