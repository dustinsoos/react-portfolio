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
import diceGame from "../assets/dicegame.jpeg";
import simon from "../assets/simonjquery.jpeg";

export default function Main() {
  const handleSubmit = (event) => {
    const email = "dustinmsoos@gmail.com";
    event.preventDefault();
    window.location.href = `mailto:${email}`;
  };

  return (
    <>
      <section id="projects" className=" md:mt-52 md:mb-80">
        <h2 className=" text-4xl mt-32 text-center ">Projects</h2>
        <div className="  md:h-fit mx-auto flex flex-col text-center items-center justify-center   md:flex md:flex-row mt-12 md:w-full shadow-xl shadow-black/50  ">
          <img src={reactPort} alt="" className=" w-full md:w-1/2" />
          <div className=" text-center flex-col  pb-8 md:pb-0 w-1/2">
            <h3 className=" text-lg font-semibold underline">Portfolio Project</h3>
            <p className=" text-md font-medium pt-4 pb-4">React ~ Tailwind CSS</p>
            <p className=" pb-4">A portfolio showcasing my technical skills.</p>
            <a
              href="https://dustinsoos.github.io/react-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-black px-8 cursor-pointer text-lg text-white font-semibold hover:underline hover:text-black hover:bg-white"
            >
              Live Site
            </a>
          </div>
        </div>
        <div className="  md:h-fit mx-auto flex flex-col text-center items-center justify-around  md:flex md:flex-row mt-12 md:w-full shadow-xl shadow-black/50 ">
          <img src={littlelemon} alt="" className=" w-full md:w-1/2" />
          <div className=" text-center flex-col  pb-8 md:pb-0 w-1/2">
            <h3 className=" text-lg font-semibold underline">Little Lemon</h3>
            <p className=" text-md font-medium pt-4 pb-4">HTML ~ CSS</p>
            <p className=" pb-4 ">
              Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. I
              practiced using Semantic HTML structure
            </p>
            <a
              href="https://dustinsoos.github.io/Little-Lemon-Project/"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-black px-8 cursor-pointer text-lg text-white font-semibold hover:underline hover:text-black hover:bg-white"
            >
              Live Site
            </a>
          </div>
        </div>
        <div className="  md:h-fit mx-auto flex flex-col text-center items-center justify-around  md:flex md:flex-row mt-12 md:w-full shadow-xl shadow-black/50  ">
          <img src={diceGame} alt="" className="w-full md:w-1/2" />
          <div className=" text-center flex-col  pb-8 md:pb-0 ">
            <h3 className=" text-lg font-semibold underline">Dice Game</h3>
            <p className=" text-md font-medium pt-4 pb-4">HTML ~ CSS ~ JavaScript</p>
            <p className=" pb-4">
              I created this game based off of a game called &#34;Pig-Game&#34;. Roll the dice to add points, make sure you lock in your points earned before
              rolling a 1. First player to 100 wins
            </p>
            <a
              href="https://dustinsoos.github.io/dice-game-to-100/"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-black px-8 cursor-pointer text-lg text-white font-semibold hover:underline hover:text-black hover:bg-white"
            >
              Live Site
            </a>
          </div>
        </div>
        <div className="  md:h-fit mx-auto flex flex-col text-center items-center justify-around  md:flex md:flex-row mt-12 md:w-full shadow-xl shadow-black/50  ">
          <img src={simon} alt="" className="w-full md:w-1/2" />
          <div className=" text-center flex-col  pb-8 md:pb-0 ">
            <h3 className=" text-lg font-semibold underline">Simon Game</h3>
            <p className=" text-md font-medium pt-4 pb-4">HTML ~ CSS ~ JQuery</p>
            <p className=" pb-4">
              This is a game I created to practice using JQuery. If you have good memory and can remember the pattern you will have a lot of fun playing this.
            </p>
            <a
              href="https://dustinsoos.github.io/Simon-Game-jQuery/"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-black px-8 cursor-pointer text-lg text-white font-semibold hover:underline hover:text-black hover:bg-white"
            >
              Live Site
            </a>
          </div>
        </div>
      </section>
      <div className=" w-full mx-auto h-px bg-black mt-52"></div>
      <section id="skills">
        <h2 className=" text-4xl mt-32 text-center "> Technical Skills</h2>

        <div className=" mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 ">
          {/* <h3 className=" text-xl md:text-2xl lg:text-3xl font-medium">Frontend:</h3> */}
          <img src={js} alt="javascript-icon" className=" w-8 md:w-12 lg:w-16" />
          <img src={html} alt="html-icon" className=" w-8 md:w-12 lg:w-16 " />
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
      </section>

      <div className=" w-full mx-auto h-px bg-black mt-52"></div>
      <section id="contact" className=" mt-52 mb-80">
        <h2 className=" text-4xl mt-32 text-center mb-12">Get In Touch</h2>
        <form className="max-w-md mx-auto border-black border-2 p-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="appearance-none border border-white rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-gray-300 bg-transparent shadow-black/50 shadow-md"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="appearance-none border border-white rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-gray-300 bg-transparent shadow-black/50 shadow-md"
              id="email"
              type="email"
              placeholder="example@email.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              className="appearance-none border border-white rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-gray-300 bg-transparent shadow-black/50 shadow-md"
              id="message"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="bg-black px-8 cursor-pointer text-lg text-white font-semibold hover:underline hover:text-black hover:bg-white " type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
      <div className=" w-full mx-auto h-px bg-black mt-24"></div>
    </>
  );
}
