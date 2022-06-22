import React from "react";
import "./Services.css";
import services from "../Data/Services.json";

const Services = () => {
  return (
    <div id="services" data-aos="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <h2 className="text-center">What I do</h2>
            <br/>
          </div>
          <div className="col-sm-11 offset-sm-1">
            <div className="row">
              {services.map((item, i) => (
                <div className="col-sm-4" key={i} >
                  <div className="servicebox" data-aos="fade-zoom-in">
                    <img src={item.imgg} alt="serviceimg" className="img-fluid" />
                    <h4>{item.servicename}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row">

          <div className="col-sm-11 offset-sm-1">
            <br />
            <br />

            <h2>Technical Skills</h2>
          </div>
          <div className="col-sm-11 offset-sm-1">
            <div className="row">
              <p>
                Swift | SwiftUI | Objective-C | iOS Framework | CI/CD | React
                Native | C | XML | JSON | REST API | IoT | TDD | iBeacon |
                Geofencing | React JS | Android 
              </p>
            </div>
          </div>
          
          <div className="col-sm-11 offset-sm-1">
            <h2>Skill set</h2>
          </div>
          <div className="col-sm-11 offset-sm-1">
            <div className="row">
              <p>
                Design Principles | Distribution Network | UI and UX design
                experience | Web design | Location Tracking | Performance Tuning
                | Mobile Design Paradigm | Troubleshoot &amp; Debug Code |
                Native app writing ability | Creativity &amp; Brainstorming |
                App Development | Unit Testing | Memory Management | Agile
                Methodologies | QA (Quality Assurance) | Training &amp;
                Mentoring | CRM (Customer Relationship Management) |
                Documentation | SDLC (Software Development Life Cycle) |
                Business Development
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
