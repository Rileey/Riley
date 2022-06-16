import React from 'react';
import "./portfolio.css";
;


const Portfolio = () => {
  return (
  <div className="portfolio-div" id="my-portfolio">
      <section className="portfolio-container">
          <div className="port-container-title">
            <span className="port-title">
                Portfolio
            </span>
          </div>
          <div className="portfolio">
          <div className="work">
                <div className="work-image-container">
                    <a href="https://www.figma.com/file/MYgtZTcvVWcoifssRNWhvn/foodine?node-id=0%3A1"><img className="img" src="./foodine-figma.PNG" alt="film-club" /></a>
                </div>
                <span className="work-title">
                    Food Delivery Application: Figma
                </span>
              </div>
              <div className="work">
                 <div className="work-image-container">
                    <a href="https://foodinemealapp.herokuapp.com/"><img src="./foodine.PNG" alt="foodine" className="img" /></a>
                </div> 
                <span className="work-title">
                    Food Delivery Application
                </span>
              </div>
              <div className="work">
                 <div className="work-image-container">
                    <a href="https://lendie-loan-app.vercel.app/"><img src="./loan.PNG" alt="loan-app" className="img" /></a>
                </div> 
                <span className="work-title">
                    Lendie Loan App
                </span>
              </div>
              <div className="work">
                <div className="work-image-container">
                   <a href="https://views.talentcroft.com/"><img src="./talentcroft.PNG" alt="talentcroft" className="img" /></a>
                </div>
                <span className="work-title">
                    Video Streaming Platform
                </span>
              </div>
              
          </div>
      </section>
      
  </div>);
};

export default Portfolio;
