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
import reactPort from "../assets/react-portfolio.jpeg";
import littlelemon from "../assets/littlelemon2.jpeg";

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
      <div id="projects" className=" mt-48 mb-44">
        <h2 className=" text-4xl mt-32 text-center ">Projects</h2>
        <div className=" h-full md:h-80 mx-auto flex flex-col text-center items-center justify-around  md:flex md:flex-row mt-12 md:w-full shadow-xl shadow-black/40 rounded-2xl ">
          <img src={reactPort} alt="" className=" w-96" />
          <div className=" text-center flex-col  pb-8 md:pb-0">
            <h3 className=" text-lg font-semibold underline">Portfolio Project</h3>
            <p className=" text-md font-medium pt-4 pb-4">React ~ Tailwind</p>
            <p className=" pb-4">A portfolio showcasing my technical skills.</p>
            <a href="https://www.google.com/" className=" bg-black px-8 cursor-pointer text-lg text-white font-semibold hover:underline">
              Live Site
            </a>
          </div>
        </div>
        <div className=" h-full md:h-80 mx-auto flex flex-col text-center items-center justify-around  md:flex md:flex-row mt-12 md:w-full shadow-xl shadow-black/40 rounded-2xl ">
          <img src={littlelemon} alt="" className=" w-96" />
          <div className=" text-center flex-col  pb-8 md:pb-0">
            <h3 className=" text-lg font-semibold underline">Little Lemon</h3>
            <p className=" text-md font-medium pt-4 pb-4">Semantic HTML ~ CSS</p>
            <p className=" pb-4">
              Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. I
              practiced using Semantic HTML structure
            </p>
            <a href="https://www.google.com/" className=" bg-black px-8 cursor-pointer text-lg text-white font-semibold hover:underline">
              Live Site
            </a>
          </div>
        </div>

        <div></div>
        <div></div>
      </div>
    </>
  );
}
