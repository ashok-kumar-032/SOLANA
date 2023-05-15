import React, { useEffect, useState } from "react";
import logo from "../assets/img/hero.webp";

const Loading = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
  }, 3000);

  return (
    <div
      id="none"
      className=" bg_section_1 min-vh-100 w-100  position-fixed top-0 start-0 loading"
    >
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg_effect">
        <img className="preloaderAnimation cat effect W_220" src={logo} />
      </div>
    </div>
  );
};

export default Loading;
