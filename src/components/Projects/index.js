import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "./data";
import "../Projects/style.css";
// import { Link } from 'react-router-dom';
import Link from "../Link";

export default function Projects() {
  return (
    <section id="projects" className="text-cyan-300 bg-blue-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Work
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Delve into my projects that showcase my problem-solving abilities and creativity. Each project reflects my commitment to delivering innovative solutions and my passion for bringing ideas to life. Explore the details of each endeavor below.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              target="_blank"
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative border border-white rounded project-card">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        {/* <Link to="/allprojects">
          <button className="bg-gray-800 text-cyan hover:bg-gray-700 hover:text-white px-6 py-4 mt-12 rounded">
            More Projects
          </button>
        </Link> */}
        <Link href="/allprojects" className="item">
        <button className="bg-gray-800 text-cyan hover:bg-gray-700 hover:text-white px-6 py-4 mt-12 text-lg rounded jumping-button">
            Explore More!
          </button>
        </Link>
      </div>
    </section>
  );
}