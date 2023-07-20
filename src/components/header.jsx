import me from "../assets/flordiaphoto.jpg";
import gitHub from "../assets/github_icon.svg";
import linkedIn from "../assets/linkedin.svg";

export default function Header() {
  return (
    <>
      <header className=" mt-24 md:mt-52 md:mb-80">
        <div className=" text-center md:flex  md:justify-center md:items-center md:text-left shadow-xl shadow-black/50 p-8">
          <img
            src={me}
            alt=""
            className=" w-full rounded-2xl mx-auto mb-8 shadow-2xl md:w-80 lg:w-96"
          />
          <div className=" md:pl-4 lg:pl-16">
            <h1 className=" text-4xl font-semibold lg:text-6xl ">
              Yo, I&#39;m Dustin.
            </h1>
            <p className=" pt-4">
              A Frontend Engineer putting all my time and efforts into becoming
              the best programmer I can be. I&#39;m always wanting to learn and
              improve, not only related to coding but as a person in general.
            </p>
            <div className=" flex items-center  gap-4 mt-4">
              <a
                href="https://github.com/dustinsoos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitHub} alt="" className=" w-9 md:w-12 " />
              </a>
              <a
                href="https://www.linkedin.com/in/dustin-soos-519483162/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} alt="" className=" w-8 md:w-10" />
              </a>
            </div>
          </div>
        </div>
        <div className=" w-full mx-auto h-px bg-black mt-52"></div>
      </header>
    </>
  );
}
