import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import ExperienceCard from '../components/ExperienceCard';
import TitleBar from '../components/TitleBar';

class Experience extends Component {
  render() {
    return (
      <div
        className="primary outer-structure"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <div
          className="inner-structure center"
          style={{ flexDirection: 'column' }}
        >
          <TitleBar title="Experience" />
          <Container fluid style={{ textAlign: 'center' }}>
            <Row style={{ display: 'inline-flex' }}>
              <ExperienceCard
                // image={BUILDLogo}
                fallback_image="/img/build-logo.jpg"
                title="Software Engineer"
                organization="Plaxonic Technologies"
                address="Noida, Utter Pradesh, India"
                alternateTitle="Software Engineer, Plaxonic Technologies"
                duration="September 2020 - Present"
                details={
                  <>
                    • Developed various Marketing Analysis tools using Python.
                    <br />
                    • Developed 2 Client Projects using Flask, React & Nodejs
                    <br />
                    • Developing Product named Paycron, with team of 2 people
                    using ReactJs & NodeJs
                  </>
                }
              />
              <ExperienceCard
                // image={VirtuBoxLogo}
                fallback_image="/img/virtubox-logo.jpg"
                title="Technical Content Writer"
                organization="GeeksforGeeks"
                address="Remote"
                alternateTitle="Technical Content Writer, GeeksforGeeks"
                duration="December 2020 - Present"
                details={
                  <>
                    • Writing Articles on various Computer science topics.
                    <br />
                    • Written various articles on cyber security.
                    <br />
                    • written some of Articles based on competitive programming.
                    <br />
                    • written articles based on hadoop architecture.
                  </>
                }
              />
              <ExperienceCard
                // image={HackUMassLogo}
                fallback_image="/img/hackumass-logo.jpg"
                title="Technical & Science Tutor"
                organization="The Dimension"
                address="Remote"
                alternateTitle="Technical Tutor, The Dimension"
                duration="January 2019 - Present"
                details={
                  <>
                    • Tought Organic Chemistry, class 11 & 12
                    <br />
                    • Tought Python Programing Basic to Advance, class 7 - 11
                    <br />
                    • Explained The Fundamentals of Programing
                  </>
                }
              />
              <ExperienceCard
                // image={HackUMassLogo}
                fallback_image="/img/hackumass-logo.jpg"
                title="Web Developer, Intern (Lead)"
                organization="The Dimension"
                address="Kolkata, West Bengal, India"
                alternateTitle="Web Developer, The Dimension"
                duration="July 2020 - December 2020"
                details={
                  <>
                    • Planed, designed & Monitored The complete Project
                    <br />
                    • Testing & Deployment of Project
                    <br />
                    • Engaged in Marketing Statergies as a member of organizing
                    team
                  </>
                }
              />
              <ExperienceCard
                // image={SmvLogo}
                fallback_image="/img/smv-logo.jpg"
                title="Team Lead"
                organization="Scout Council, Shree Maheshwary Vidyalaya"
                address="Kolkata, West Bengal, India"
                alternateTitle="Team Lead, Student Council"
                duration="Jan 2012 - April 2013"
                details={
                  <>
                    • Represented school with my team in state level scout show
                    <br />
                    • Guided junior's scout team for performance.
                  </>
                }
              />
              <ExperienceCard
                // image={TEDxRKPLogo}
                fallback_image="/img/tedxyouth-logo.jpg"
                title="Program Analyst"
                organization="TECHOX LLP"
                address="Remote"
                alternateTitle="Program Analyst, TECHOX"
                duration="July 2020 - October 2020"
                details={
                  <>
                    • Designed complete python and web-designing Modules,
                    Handbooks, Assignments etc.
                    <br />
                    • Created Analysis reports for each and every event held
                    into the company.
                    <br />
                    • Edited some of Social media post.
                    <br />
                    • Woked on Marketing and Work flow management of the
                    company.
                    <br />
                    • Developed various full client projects.
                    <br />
                    • Worked on training and Development of Ambassadors and
                    Interns.
                  </>
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
