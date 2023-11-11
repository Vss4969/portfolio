import React from "react";
import {Typewriter} from "react-simple-typewriter"; // Import Typewriter from react-simple-typewriter
import "./style.css";

export const About = () => {
  return (
    <section id="about">
          <h1>
          </h1>
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Vidyasagar.
                <br className="hidden lg:inline-block"/>
                I love 
                <span className="text-red-500 typewriter-text">
                  <Typewriter
                    words={[' programming.', ' coding.', ' designing.', ' developing.', ' solving problems.']}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    // Adding a white text shadow for each letter
                    style={{
                      textShadow:
                        '0 0 10px white, 0 0 20px white, 0 0 30px white, 0 0 40px white, 0 0 50px white',
                    }}
                  />
                </span>
              </h1>
              <p className="mb-8 leading-relaxed">
              I am currently in my final year at IIT Dharwad, pursuing a Bachelor of Technology in Computer Science. As a Full Stack web developer and software designer, I specialize in crafting exceptional user experiences through innovative frontend design and efficient database management. My proficiency lies in C++, Python, and JavaScript, supported by a robust foundation in data structures and algorithms.              </p>
              <div className="flex justify-center">
                <a
                  href="#projects"
                  className=" inline-flex text-cyan bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg jumping-button">
                  Explore My Work!
                </a>
                <a
                  href="#contact"
                  className="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 hover:text-gray-800 rounded text-lg jumping-button">
                  Get in Touch!
                </a>
                
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-5/6 w-5/6" style={{ textAlign: 'center' }}>
                <div className="image-container">
                  <div className="profile-pic-border">
                    <img
                      className="object-cover object-center rounded"
                      alt="hero"
                      src="./profs/PROF4.1.jpg"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
            </div>

          </div>
        </section>
  );
}
