import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  function toggleMenu() {
    let hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("hidden");
    hamburger.classList.toggle("grid");
  }

  const handleIsClosed = () => {
    let navClick = document.getElementById("hamburger");
    navClick.classList.toggle("hidden");
    navClick.classList.toggle("grid");
  };

  return (
    <nav id="nav" className=" mt-8  ">
      <FontAwesomeIcon
        icon={faBars}
        size="2xl"
        style={{ color: "#000000" }}
        onClick={toggleMenu}
        className=" block cursor-pointer md:hidden"
      />
      <ul
        id="hamburger"
        className=" place-content-start justify-items-start mt-4 gap-2 md:visible md:flex md:gap-7 md:items-center md:justify-start hidden"
      >
        <h3 className=" hidden text-4xl md:block ">DS</h3>

        <button className=" hover:underline">
          <Link
            to="projects"
            onClick={handleIsClosed}
            smooth={true}
            duration={700}
          >
            Projects
          </Link>
        </button>
        <button className=" hover:underline">
          <Link
            to="skills"
            onClick={handleIsClosed}
            smooth={true}
            duration={700}
          >
            Skills
          </Link>
        </button>
        <button className=" hover:underline">
          <Link
            to="contact"
            onClick={handleIsClosed}
            smooth={true}
            duration={700}
          >
            Contact
          </Link>
        </button>
      </ul>
    </nav>
  );
}
