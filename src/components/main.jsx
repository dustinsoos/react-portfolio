import js from "../assets/js.svg";
import html from "../assets/html5.svg";
import css from "../assets/css3-alt.svg";
import react from "../assets/react.svg";
import bootstrap from "../assets/bootstrap.svg";
import figma from "../assets/figma.svg";
import git from "../assets/git.svg";
import py from "../assets/python.svg";
import db from "../assets/database-solid.svg";
import github from "../assets/github.svg";
import terminal from "../assets/terminal-solid.svg";

export default function Main() {
  return (
    <>
      <div id="skills">
        <h2 className=" text-4xl mt-32 text-center "> Technical Skills</h2>

        <div className=" mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {/* <h3 className=" text-xl md:text-2xl lg:text-3xl font-medium">Frontend:</h3> */}
          <img src={js} alt="javascript-icon" className=" w-8 md:w-12 lg:w-16 " />
          <img src={html} alt="html-icon" className=" w-8 md:w-12 lg:w-16" />
          <img src={css} alt="css-icon" className=" w-8 md:w-12 lg:w-16" />
          <img src={react} alt="react-icon" className=" w-8 md:w-12 lg:w-16" />
          <img src={bootstrap} alt="bootstrap-icon" className=" w-8 md:w-12 lg:w-16" />
          <img src={figma} alt="figma-icon" className=" w-8 md:w-12 lg:w-16" />
          <img src={git} alt="figma-icon" className=" w-8 md:w-12 lg:w-16" />
          <img src={github} alt="figma-icon" className=" w-8 md:w-12 lg:w-16" />
          <img src={py} alt="figma-icon" className=" w-8 md:w-12 lg:w-16" />
          <img src={db} alt="figma-icon" className=" w-8 md:w-12 lg:w-16" />
          <img src={terminal} alt="figma-icon" className=" w-8 md:w-12 lg:w-16" />
        </div>
      </div>
      <div className=" w-full mx-auto h-px bg-black mt-52"></div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
