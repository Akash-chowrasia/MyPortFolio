import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import ExperienceCard from "../components/ExperienceCard";
import TitleBar from "../components/TitleBar";

import TEDxRKPLogo from "../assets/webp/tedxyouth-logo.webp";
import BUILDLogo from "../assets/webp/build-logo.webp";
import VirtuBoxLogo from "../assets/webp/virtubox-logo.webp";
import HackUMassLogo from "../assets/webp/hackumass-logo.webp";

import TEDxRKPFallbackLogo from "../assets/jpg/tedxyouth-logo.jpg";
import BUILDFallbackLogo from "../assets/jpg/build-logo.jpg";
import VirtuBoxFallbackLogo from "../assets/jpg/virtubox-logo.jpg";
import HackUMassFallbackLogo from "../assets/jpg/hackumass-logo.jpg";
import SmvLogo from "../assets/webp/smv-logo.webp";
import SmvFallbackLogo from "../assets/jpg/smv-logo.jpg";

class Experience extends Component {
  render() {
    return (
      <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
        <div className="inner-structure center" style={{ flexDirection: "column" }}>
          <TitleBar title="Experience" />
          <Container fluid style={{ textAlign: "center" }}>
            <Row style={{ display: "inline-flex" }}>
              <ExperienceCard
                image={BUILDLogo}
                fallback_image={BUILDFallbackLogo}
                title="Software Engineer"
                organization="Plaxonic Technologies"
                address="Noida, Utter Pradesh, India"
                alternateTitle="Software Engineer, Plaxonic Technologies"
                duration="September 2020 - Present"
                details={
                  <React.Fragment>
                    • Developed various Marketing Analysis tools using Python.
                    <br />
                    • Developed 2 Client Projects using Flask, React & Nodejs
                    <br />
                    • Developing Product named Paycron, with team of 2 people using ReactJs & NodeJs
                  </React.Fragment>
                }
              />
              <ExperienceCard
                image={VirtuBoxLogo}
                fallback_image={VirtuBoxFallbackLogo}
                title="Technical Content Writer"
                organization="GeeksforGeeks"
                address="Remote"
                alternateTitle="Technical Content Writer, GeeksforGeeks"
                duration="December 2020 - Present"
                details={
                  <React.Fragment>
                    • Writing Articles on various Computer science topics.
                    <br />
                    • Written various articles on cyber security.
                    <br />
                    • written some of Articles based on competitive programming.
                    <br />
                    • written articles based on hadoop architecture.
                  </React.Fragment>
                }
              />
              <ExperienceCard
                image={HackUMassLogo}
                fallback_image={HackUMassFallbackLogo}
                title="Web Developer, Intern (Lead)"
                organization="The Dimension"
                address="Kolkata, West Bengal, India"
                alternateTitle="Graphic Developer, The Dimension"
                duration="July 2020 - December - 2020"
                details={
                  <React.Fragment>
                    • Planed, designed & Monitored The complete Project
                    <br />
                    • Testing & Deployment of Project
                    <br />
                    • Engaged in Marketing Statergies as a member of organizing team
                  </React.Fragment>
                }
              />
              <ExperienceCard
                image={HackUMassLogo}
                fallback_image={HackUMassFallbackLogo}
                title="Technical & Science Tutor"
                organization="The Dimension"
                address="Remote"
                alternateTitle="Technical Tutor, The Dimension"
                duration="January 2019 - Present"
                details={
                  <React.Fragment>
                    • Tought Organic Chemistry, class 11 & 12
                    <br />
                    • Tought Python Programing Basic to Advance, class 7 - 11
                    <br />
                    • Explained The Fundamentals of Programing
                  </React.Fragment>
                }
              />
              <ExperienceCard
                image={SmvLogo}
                fallback_image={SmvFallbackLogo}
                title="Team Lead"
                organization="Scout Council, Shree Maheshwary Vidyalaya"
                address="Kolkata, West Bengal, India"
                alternateTitle="President, Student Council"
                duration="Jan 2012 - April 2013"
                details={
                  <React.Fragment>
                    • Represented school with my team in state level scout show
                    <br />
                    • Guided junior's scout team for performance.
                  </React.Fragment>
                }
              />
              <ExperienceCard
                image={TEDxRKPLogo}
                fallback_image={TEDxRKPFallbackLogo}
                title="Program Analyst"
                organization="TECHOX LLP"
                address="Remote"
                alternateTitle="Program Analyst, TECHOX"
                duration="July 2020 - October 2020"
                details={
                  <React.Fragment>
                    • Designed complete python and web-designing Modules, Handbooks, Assignments etc.
                    <br />
                    • Created Analysis reports for each and every event held into the company.
                    <br />
                    • Edited some of Social media post.
                    <br />
                    • Woked on Marketing and Work flow management of the company.
                    <br />
                    • Developed various full client projects.
                    <br />
                    • Worked on training and Development of Ambassadors and Interns.
                  </React.Fragment>
                }
              />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Experience;
