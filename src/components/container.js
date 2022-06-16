import React from 'react';
import "./container.css";
import { Link } from "react-scroll"
;


const Container = () => {
  return (<div className="top-body-container">
      <main className="introduction">
        <article className="intro-container">
            <span className="hello">Hi 👋🏾, I'm</span>
            <span className="name">Deji Omoloja</span>
            <span className="job-title">Full Stack Web Developer with UI/UX Experience</span>
            <span className="job-subtitle">Hello! I am Deji, a software developer with over 3 years of experience who has had a successful career in multinational companies collaborating with companies to create the most substantial work results. 
            </span>
        </article>
        <div className="image-container">
            <img src="./Cartoonify-deji.png" alt="Riley" />
        </div>
      </main>
      <section className="under-introduction">
        <Link to="contact" style={{display: "contents", position: "relative"}} smooth={true} duration={1000}>
            <span className="hire-me2">Hire Me</span>
            <span className="hire-me">Hire Me</span>
        </Link>
      </section>
  </div>);
};

export default Container;
