import js from "../assets/js.svg";
import html from "../assets/html5.svg";
import css from "../assets/css3-alt.svg";
import react from "../assets/react.svg";
import bootstrap from "../assets/bootstrap.svg";
import figma from "../assets/figma.svg";

export default function Main() {
  return (
    <>
      <div>
        <h2 className=" text-4xl underline mt-32 text-center">Skills</h2>
        <div className=" mt-12 flex items-center justify-evenly md:justify-between lg:justify-between">
          <h3 className=" text-xl md:text-2xl lg:text-3xl font-medium">Frontend:</h3>
          <img src={js} alt="" className=" w-8 md:w-12 lg:w-20" />
          <img src={html} alt="" className=" w-8 md:w-12 lg:w-20" />
          <img src={css} alt="" className=" w-8 md:w-12 lg:w-20" />
          <img src={react} alt="" className=" w-8 md:w-12 lg:w-20" />
          <img src={bootstrap} alt="" className=" w-8 md:w-12 lg:w-20" />
          <img src={figma} alt="" className=" w-8 md:w-12 lg:w-20" />
        </div>
      </div>
    </>
  );
}
