import React from "react";
/* import "../../App.css" */
import Navbar from "../../components/Navbar";
import { TitleContext } from "../../components/Contexts";

function Courses() {
  const title = "hafal.in";
  return (
    <>
      <TitleContext.Provider value={title}>
        <Navbar />
        <h1 className="courses">COURSES</h1>
      </TitleContext.Provider>
    </>
  );
}

export default Courses;
