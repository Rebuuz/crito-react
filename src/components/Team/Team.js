import React from 'react';

import Team1 from '../../assets/images/team1.svg';
import Team2 from '../../assets/images/team2.svg';
import Team3 from '../../assets/images/team3.svg';
import Team4 from '../../assets/images/team4.svg';

const Team = () => {
  return (
    <section className="team-members">
        <div className="container">
            <div className="section-title">
                <p>Meet Our Team</p>
                <h2>Experience Team Members <a className="btn-yellow" href="#">Browse Team <i className="fa-regular fa-arrow-up-right"></i></a></h2> 
            </div>
            <div className="section-team">
                <div>
                    <img src={Team1} alt="Bild på Kristine Palmer" />
                    <h3>Kristine Palmer</h3>
                    <p>Chef Operation Officer</p>
                </div>
                <div>
                    <img src={Team2} alt="Bild på Mark Aubri" />
                    <h3>Mark Aubri</h3>
                    <p>Senior Consultant</p>
                </div>
                <div>
                    <img src={Team3} alt="Bild på Kimberly Hansen" />
                    <h3>Kimberly Hansen</h3>
                    <p>Senior Consultant</p>
                </div>
                <div>
                    <img src={Team4} alt="Bild på Justin Willoman" />
                    <h3>Justin Willoman</h3>
                    <p>Senior Tech Consultant</p>
                </div>
            </div>
            <div className="icons">
                <a href="#"><span className="dot"></span></a>
                <a href="#"><span className="dot active"></span></a>
                <a href="#"><span className="dot"></span></a>
                <a href="#"><span className="dot"></span></a>
                <a href="#"><span className="dot"></span></a>
            </div>
        </div>
    </section>
  )
}

export default Team