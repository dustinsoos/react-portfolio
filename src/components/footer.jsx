import { Link } from "react-scroll";
import gitHub from "../assets/github_icon.svg";
import linkedIn from "../assets/linkedin.svg";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <footer className=" mt-12 grid text-center place-items-center pb-10">
        <div className="  md:flex gap-2 md:gap-12 justify-start">
          <h3 className="  text-4xl pb-4 md:pb-0 ">DS</h3>
          <div className=" grid pb-4 md:pb-0">
            <h3 className="text-xl font-medium underline mb-4">
              Doormat Navigation
            </h3>
            <button className=" hover:underline" onClick={handleScrollToTop}>
              To Top
            </button>
            <button className=" hover:underline">
              <Link to="projects" smooth={true} duration={700}>
                Projects
              </Link>
            </button>
            <button className=" hover:underline">
              <Link to="skills" smooth={true} duration={700}>
                Skills
              </Link>
            </button>
            <button className=" hover:underline">
              <Link to="contact" smooth={true} duration={700}>
                Contact
              </Link>
            </button>
          </div>
          <div className=" pb-4 md:pb-0">
            <h3 className="text-xl font-medium underline">Social Media</h3>
            <a
              href="https://github.com/dustinsoos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHub} alt="" className=" w-8 mx-auto mt-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/dustin-soos-519483162/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIn} alt="" className=" w-6 mx-auto mt-4" />
            </a>
          </div>
          <div> &#169; Copyright Dustin Soos</div>
        </div>
      </footer>
    </>
  );
}
