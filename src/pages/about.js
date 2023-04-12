import React from "react";
/* import "../../App.css" */
import Navbar from "../../components/Navbar";
import { TitleContext } from "../../components/Contexts";

function About() {
  const title = "hafal.in";
  return (
    <>
      <TitleContext.Provider value={title}>
        <Navbar />
        <h1 className="about">ABOUT US</h1>
      </TitleContext.Provider>
    </>
  );
}

export default About;
