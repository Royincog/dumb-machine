import React from "react";
import Button from "./Button";
import Form from "./Form";
import { useUser } from "../contexts/UserProvider";
import { saveUserDataToFireBase } from "../firebaseconfig/auth/saveuserdata";
import { signInWithGooglePopUp } from "../firebaseconfig/auth/authconfig";
import { doesDocumentExist } from "../firebaseconfig/firedbutil";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function AuthFormAction() {
  const { currentUser, mutate } = useUser();
  const navigate = useNavigate();

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

  return (
    <React.Fragment>
      <Fade>
        {" "}
        <Button text="Go Back 🐽" onClick={() => navigate("/")}></Button>
      </Fade>{" "}
      {!currentUser && (
        <p className="font-bold py-2">
          Please Click the dumb button to write !!
        </p>
      )}
      {currentUser ? (
        <Form />
      ) : (
        <Button text="sign-in 💤" onClick={loginUser} />
      )}
    </React.Fragment>
  );
}

export default AuthFormAction;
