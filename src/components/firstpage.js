import "./firstpage.css"
import React from 'react';


const Firstpage = () => {
  return (
    <div className="firstpage-container" id="my-services">
            <div className="myservices-container">
                <span className="service" >My Services</span>
            </div>
    <div className="header">
        <div className="service-offers">
            
            <div className="box">
                <div className="user-container services">
                    <span className="user-title">User Interface Design</span>
                    <span className="user-languages">
                        <i class="fab fa-figma"></i>
                    </span>
                    <span className="user-subtitles">
                    I use design tools to create designs and prototypes to suit your needs. 
                    I design beautiful products for better user experience
                    </span>
                </div>
            </div>
            <div className="box">
                <div className="frontend-container services">
                <span className="user-title">Web Development</span>
                        <span className="user-languages">
                            <i class="fab fa-html5"></i>
                            <i class="fab fa-react"></i>
                            <i class="fab fa-node"></i>
                            <i class="fas fa-database"></i>
                        </span>
                        <span className="user-subtitles">
                        I create functional and beautiful applications that
                        suit the user's needs. I am
                        able to create clean and functional web
                        applications via development of the client-side
                        and server-side of a required application.
                        </span>
                </div>
            </div>
            
            <div className="backend-container services">

            </div>
        </div>

        <div className="technology">
            <div className="tech-list">
                <span className="techlist-item"><i class="fas fa-check"></i>JavaScript</span>
                <span className="techlist-item"><i class="fas fa-check"></i>React</span>
                <span className="techlist-item"><i class="fas fa-check"></i>Node</span>
                <span className="techlist-item"><i class="fas fa-check"></i>Express</span>
                <span className="techlist-item"><i class="fas fa-check"></i>MongoDB</span>
                <span className="techlist-item"><i class="fas fa-check"></i>My SQL</span>
                <span className="techlist-item"><i class="fas fa-check"></i>Wordpress</span>
                <span className="techlist-item"><i class="fas fa-check"></i>Figma</span>
                <span className="techlist-item"><i class="fas fa-check"></i>Adobe Xd</span>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Firstpage;

