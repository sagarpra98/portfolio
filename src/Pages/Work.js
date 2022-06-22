import React from "react";
import "./Work.css";
import work from "../Data/Work.json";

const Work = () => {
  return (
    <div id="work">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <h2>My Projects</h2>
            <br />
            {work.map((item, i) => (
              <div className="workblock" key={i}>
                <div className="row">
                  <div className="col-sm-5">
                    <h5>{item.title}</h5>
                    <a href="https://apps.apple.com/us/app/rescue-network/id1136266554" >
                      <h6>App Store</h6>
                    </a>                    
                  </div>
                  <div className="col-sm-7">
                    <div className="educationright">
                      {/* <h5>{item.title}</h5> */}
                      <h6 className="position">
                        <span>
                          <strong>Role:</strong> {item.role}
                        </span>{" "}
                        <br />
                        <span>
                          <strong>Technologies:</strong> {item.technologies}
                        </span>{" "}
                        <br />
                        <span>
                          <strong>Environment:</strong> {item.environment}
                        </span>
                        <br />
                        <span>
                          <strong>Tenure:</strong> {item.tenure}
                        </span>
                      </h6>
                      <h6>{item.desc}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
