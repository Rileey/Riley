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
            <span className="job-title">Software Developer </span>
            <span className="job-subtitle">As a highly skilled and adaptable software developer with a strong track record of delivering innovative solutions, I offer you a valuable combination of technical expertise and cross-cultural understanding to drive your projects to success in a global market 
            </span>
        </article>
        <div className="image-container">
            <img className='deji-image' src="./deji.png" alt="Riley" />
        </div>
      </main>
      <section className="under-introduction">
        <Link to="contact" style={{display: "contents", position: "relative"}} smooth={true} duration={1000}>
            <span className="hire-me2">Let's talk</span>
            <span className="hire-me">Let's talk</span>
        </Link>
      </section>
  </div>);
};

export default Container;
