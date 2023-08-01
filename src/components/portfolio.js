import React from 'react';
import "./portfolio.css";
;


const Portfolio = () => {
    const work = [
        {
            title: 'Food Delivery Application: Figma',
            link: 'https://www.figma.com/file/MYgtZTcvVWcoifssRNWhvn/foodine?node-id=0%3A1',
            image: './foodine-figma.PNG'
        },
        {
            title: 'Food Delivery Application',
            link: 'https://foodinemealapp.herokuapp.com/',
            image: './foodine.jpg'
        },
        {
            title: 'Lendie Loan App',
            link: 'https://lendie-loan-app.vercel.app/',
            image: './loan.PNG'
        },
        {
            title: 'Video Streaming Platform',
            link: 'https://views.talentcroft.com/',
            image: './talentcroft.PNG'
        },
        {
            title: 'Grid Platform',
            link: 'https://www.getgrid.xyz/',
            image: './talentx.jpg'
        }
    ]
  return (
  <div className="portfolio-div" id="my-portfolio">
      <section className="portfolio-container">
          <div className="port-container-title">
            <span className="port-title">
                Portfolio
            </span>
          </div>
          <div className="portfolio">
                {work.map((work) =><div className="work">
                <div className="work-image-container">
                    <a href={work?.link}><img className="img" src={work?.image} alt="foodine figma" /></a>
                </div>
                <span className="work-title">
                    {work?.title}
                </span>
              </div>)}
          </div>
      </section>
      
  </div>);
};

export default Portfolio;
