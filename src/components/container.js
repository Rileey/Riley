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
            <span className="job-title">Web Developer with UI/UX Experience</span>
            <span className="job-subtitle">I'm a Full-Stack Developer and I love to create experiences for users using web technology
            I am currently interested in, and learning the w3b technology. 
            </span>
        </article>
        <div className="image-container">
            <img src="./Cartoonify-deji.png" alt="Riley" />
        </div>
      </main>
      <section className="under-introduction">
        <Link to="contact" style={{display: "contents"}} smooth={true} duration={1000}>
            <span className="hire-me2">Hire Me</span>
            <span className="hire-me">Hire Me</span>
        </Link>
      </section>
  </div>);
};

export default Container;
