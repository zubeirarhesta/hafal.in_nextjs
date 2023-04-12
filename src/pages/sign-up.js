import React from "react";
import Navbar from "../../components/Navbar";
import { TitleContext } from "../../components/Contexts";

function SignUp() {
  const title = "hafal.in";
  return (
    <>
      <TitleContext.Provider value={title}>
        <Navbar />
        <h1 className="sign-up">SIGNUP</h1>
      </TitleContext.Provider>
    </>
  );
}

export default SignUp;
