import me from "../assets/flordiaphoto.jpg";

export default function Header() {
  return (
    <>
      <header className=" mt-8 md:mt-24">
        <div className=" text-center md:flex  md:justify-center md:items-center md:text-left ">
          <img src={me} alt="" className=" w-full rounded-2xl mx-auto mb-8 shadow-2xl md:w-72 lg:w-96" />
          <div className=" md:pl-4 lg:pl-16">
            <h1 className=" text-4xl font-semibold lg:text-7xl ">Yo, I&#39;m Dustin.</h1>
            <p className=" pt-4">
              A Frontend Engineer putting all my time and efforts into becoming the best programmer I can be. I&#39;m always wanting to learn and improve, not
              only related to coding but as a person in general.
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
