import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  function toggleMenu() {
    let hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("collapse");
  }

  return (
    <nav className=" mt-8">
      <FontAwesomeIcon icon={faBars} size="lg" style={{ color: "#000000" }} onClick={toggleMenu} className=" visible md:collapse" />
      <ul id="hamburger" className=" collapse md:visible">
        <a href="/">Home</a>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
