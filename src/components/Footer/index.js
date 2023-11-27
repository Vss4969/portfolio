import React from "react";
import "./style.css";
import { links } from "./data.js";

export default function Footer() {

    return (
        <section id="contact" className="text-cyan-300 bg-blue-900 body-font">
            <div className="bg-gray-800 md:sticky top-0 z-10 footer-container">
                <div className="ml-3 text-xl items-center logo-container">
                    <img
                        src="./logos/logo.png"
                        height={120}
                        width={120}
                        className="mr-4 rounded-full" // Add a right margin for spacing
                        alt="logo"
                    />
                    <br />
                    <div href="/">
                        Vidyasagar S Singadi
                    </div>
                </div>
                <div className="contact-container">
                    <a className="title-font font-semibold text-white tracking-widest text-xs">
                        ADDRESS:
                    </a>
                    T7-H8, Indian Institute of Technolgy Dharwad<br />Dharwad, Karnataka - 580011
                    <br />
                    <br />
                    <a className="title-font font-semibold text-white tracking-widest text-xs">
                        EMAIL:
                    </a>
                    vidyasagar.singadi@gmail.com
                    <br />
                    <a className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                        PHONE:
                    </a>
                    +91-83-1011-4239
                </div>
                <div className="social-container">
                    {links.map((link) => (
                        <div classNmae="icons-container" title={link.name}>
                            <a
                                target="_blank"
                                href={link.url}
                                key={link.name}
                                className="sm:w-1/2 w-100 p-4">
                                <img
                                    alt="gallery"
                                    src={link.icon}
                                    height={30}
                                    width={30}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 