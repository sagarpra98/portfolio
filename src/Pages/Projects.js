import React from "react";
import onelife from "../Data/Portfolioimg/1life.png";
import jahanMoneyTransfer from "../Data/Portfolioimg/jahanMoneyTransfer.png";
import tmroApp from "../Data/Portfolioimg/tmroApp.png";

import goodhandsrescuenetworks from "../Data/Portfolioimg/goodhandsrescuenetworks.png";
import cadTech from "../Data/Portfolioimg/cadTech.png";
import pelipost from "../Data/Portfolioimg/pelipost.png";
import otherlevels from "../Data/Portfolioimg/otherlevels.png";
import invictus from "../Data/Portfolioimg/invictus.png";
import docScanner from "../Data/Portfolioimg/docScanner.png";
import wimetlab from "../Data/Portfolioimg/wimetlab.png";
import "./Projects.css";

const Portfolio = () => {
  return (
    <div id="portfolio" data-aos="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="row">
              <div className="col-sm-12">
                <h2>Portfolio</h2>
                <br />
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img src={tmroApp} className="img-fluid" alt="1Life" />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img
                    src={jahanMoneyTransfer}
                    className="img-fluid"
                    alt="Alembic"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img
                    src={goodhandsrescuenetworks}
                    className="img-fluid"
                    alt="AvidOrganics"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img src={cadTech} className="img-fluid" alt="BaggsInc" />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img
                    src={pelipost}
                    className="img-fluid"
                    alt="DesignMaxInteriors"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img
                    src={otherlevels}
                    className="img-fluid"
                    alt="DrDharaBhatt"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec">
                  <img
                    src={invictus}
                    className="img-fluid"
                    alt="Mastercoin"
                  />
                </div>
              </div>      
              <div className="col-sm-4">
                <div className="imgsec">
                  <img
                    src={docScanner}
                    className="img-fluid"
                    alt="docScanner"
                  />
                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
