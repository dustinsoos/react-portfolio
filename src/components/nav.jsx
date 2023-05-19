import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import gitHub from "../assets/github.svg";
import linkedIn from "../assets/linkedin.svg";

export default function Nav() {
  function toggleMenu() {
    let hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("collapse");
  }

  return (
    <nav className=" mt-8  ">
      <FontAwesomeIcon icon={faBars} size="2xl" style={{ color: "#000000" }} onClick={toggleMenu} className=" visible md:collapse" />
      <ul id="hamburger" className=" flex items-center  mb-8  gap-2 -mt-10 collapse md:visible md:flex md:gap-7 md:items-center md:justify-start">
        <h3 className=" collapse text-4xl md:visible ">DS</h3>

        <a href="/" className=" underline">
          Home
        </a>
        <a href="/">Skills</a>
        <a href="/">Projects</a>
        <a href="/">Contact</a>
        <a href="https://github.com/dustinsoos" target="_blank" rel="noopener noreferrer">
          <img src={gitHub} alt="" className=" w-6" />
        </a>
        <a href="https://www.linkedin.com/in/dustin-soos-519483162/" target="_blank" rel="noopener noreferrer">
          <img src={linkedIn} alt="" className=" w-6" />
        </a>
      </ul>
    </nav>
  );
}
