import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  function toggleMenu() {
    let hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("collapse");
  }

  return (
    <nav className=" mt-8  ">
      <FontAwesomeIcon icon={faBars} size="xl" style={{ color: "#000000" }} onClick={toggleMenu} className=" visible md:collapse" />
      <ul id="hamburger" className=" collapse md:visible md:flex gap-12 md:items-center ">
        <h3 className=" collapse text-4xl md:visible">DS</h3>
        <a href="/" className=" underline">
          Home
        </a>
        <a href="/">Skills</a>
        <a href="/">Projects</a>
        <a href="/">Contact</a>
      </ul>
    </nav>
  );
}
