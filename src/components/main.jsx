import js from "../assets/js_icon.svg";
import html from "../assets/html_icon.svg";
import css from "../assets/css_icon.svg";
import react from "../assets/react_icon.svg";
import bootstrap from "../assets/bootstrap_icon.svg";
import figma from "../assets/figma_icon.svg";
import git from "../assets/git_icon.svg";
import py from "../assets/python_icon.svg";
import next from "../assets/nextjs_icon.svg";
import db from "../assets/sql_icon.svg";
import github from "../assets/github_icon.svg";
import littleLemon from "../assets/little-lemon-project.jpeg";
import reactPort from "../assets/react-portfolio.jpeg";
import frontendAssets from "../assets/frontendassets.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Main() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = (values, { resetForm }) => {
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
    };

    emailjs
      .send(
        "default_service",
        "template_wvds2ar",
        templateParams,
        "dy-_8VK0GEzEgyCEd"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          resetForm();
          setSubmissionStatus("success");
        },
        function (error) {
          console.log("FAILED...", error);
          setSubmissionStatus("error");
        }
      );
  };

  return (
    <>
      <section id="projects" className=" md:mt-52 md:mb-80">
        <h2 className=" text-4xl mt-32 text-center ">Projects</h2>
        <div className=" h-full   mx-auto flex flex-col items-center md:flex md:flex-row mt-12 md:w-full shadow-xl shadow-black/50 ">
          <img src={frontendAssets} alt="" className=" w-full md:w-1/2" />
          <div className=" text-center flex-col  pb-8 md:pb-0 ">
            <h3 className=" text-lg font-semibold underline">
              Frontend Assets
            </h3>
            <p className=" text-md font-medium pt-4 pb-4">
              React | Tailwind CSS | NextJS
            </p>
            <p className=" mb-4 ">
              {" "}
              This project is a dynamic website designed to provide an extensive
              repository of curated learning materials and tools specifically
              tailored for aspiring and experienced frontend developers
            </p>
            <a
              href="https://frontend-assets.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-black px-8 cursor-pointer text-lg text-white font-semibold hover:underline hover:text-black hover:bg-white"
            >
              Live Site
            </a>
          </div>
        </div>
        <div className=" h-full  mx-auto flex flex-col  items-center   md:flex md:flex-row mt-12 md:w-full shadow-xl shadow-black/50 ">
          <img src={littleLemon} alt="" className=" w-full md:w-1/2" />
          <div className=" text-center flex-col  pb-8 md:pb-0 ">
            <h3 className=" text-lg font-semibold underline">Little Lemon</h3>
            <p className=" text-md font-medium pt-4 pb-4">
              React | Tailwind CSS | NextJS
            </p>
            <p className=" pb-4 ">
              {" "}
              SPA frontend application using NextJS. Giving customers a quick
              and easy way to reserve a table for their loved ones
            </p>
            <a
              href="https://little-lemon-react-henna.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-black px-8 cursor-pointer text-lg text-white font-semibold hover:underline hover:text-black hover:bg-white"
            >
              Live Site
            </a>
          </div>
        </div>
        <div className="h-full mx-auto flex flex-col  items-center justify-center   md:flex md:flex-row mt-12 md:w-full shadow-xl shadow-black/50  ">
          <img src={reactPort} alt="" className=" w-full md:w-1/2" />
          <div className=" text-center flex-col  pb-8 md:pb-0 ">
            <h3 className=" text-lg font-semibold underline">
              Portfolio Project
            </h3>
            <p className=" text-md font-medium pt-4 pb-4">
              React | Tailwind CSS | ViteJS
            </p>
            <p className=" pb-4">A portfolio showcasing my technical skills</p>
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
      </section>
      <div className=" w-full mx-auto h-px bg-black mt-52"></div>
      <section id="skills">
        <h2 className=" text-4xl mt-32 text-center "> Technical Skills</h2>

        <div className=" mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 ">
          {/* <h3 className=" text-xl md:text-2xl lg:text-3xl font-medium">Frontend:</h3> */}
          <img
            src={js}
            alt="javascript-icon"
            className=" w-12 md:w-1 lg:w-16"
          />
          <img src={html} alt="html-icon" className=" w-12 lg:w-16 " />
          <img src={css} alt="css-icon" className="  w-12  lg:w-16" />
          <img src={react} alt="react-icon" className=" w-12  lg:w-16" />
          <img src={next} alt="nextjs-icon" className=" w-12 md:w-12 lg:w-16" />
          <img
            src={bootstrap}
            alt="bootstrap-icon"
            className=" w-12 md:w-12 lg:w-16"
          />
          <img src={figma} alt="figma-icon" className=" w-12  lg:w-16" />
          <img src={git} alt="figma-icon" className=" w-12  lg:w-16" />
          <img src={github} alt="figma-icon" className=" w-12  lg:w-16" />
          <img src={py} alt="figma-icon" className=" w-12  lg:w-16" />
          <img src={db} alt="figma-icon" className=" w-12  lg:w-16" />
        </div>
      </section>

      <div className=" w-full mx-auto h-px bg-black mt-52"></div>
      <section id="contact" className=" mt-52 mb-80">
        <h2 className=" text-4xl mt-32 text-center mb-12">Get In Touch</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="max-w-md mx-auto border-black border-2 p-8">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <Field
                className="appearance-none border border-white rounded w-full py-2 px-3 text-black leading-tight focus:outline-none  focus:border-gray-300 bg-transparent shadow-black/50 shadow-md"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
              <ErrorMessage
                component="p"
                name="name"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <Field
                className="appearance-none border border-white rounded w-full py-2 px-3 text-black leading-tight focus:outline-none  focus:border-gray-300 bg-transparent shadow-black/50 shadow-md"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              <ErrorMessage
                component="p"
                name="email"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <Field
                className="appearance-none border border-white rounded w-full py-2 px-3 text-black leading-tight focus:outline-none  focus:border-gray-300 bg-transparent shadow-black/50 shadow-md"
                as="textarea"
                name="message"
                id="message"
                placeholder="Enter your message"
              />
              <ErrorMessage
                component="p"
                name="message"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-black px-8 cursor-pointer text-lg mx-auto text-white font-semibold hover:underline hover:text-black hover:bg-white "
                type="submit"
              >
                Submit
              </button>
            </div>
            {submissionStatus === "success" && (
              <div className="   bg-green-500 shadow-black/50 shadow-xl font-medium  p-4 md:p-10 text-center mt-12">
                Message submitted successfully!
              </div>
            )}
            {submissionStatus === "error" && (
              <div className=" bg-red-500 shadow-black/50 shadow-xl p-4 md:p-10 text-center mt-12">
                Error submitting the message. Please try again.
              </div>
            )}
          </Form>
        </Formik>
      </section>
      <div className=" w-full mx-auto h-px bg-black mt-24"></div>
    </>
  );
}
