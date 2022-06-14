import React from "react";
import { Container, Row } from "react-bootstrap";

import EducationCard from "../components/EducationCard";
import CourseworkButton from "../components/CourseworkButton";
import TitleBar from "../components/TitleBar";

import UMassLogo from "../assets/webp/umass-logo.webp";
import UMassFallbackLogo from "../assets/jpg/umass-logo.jpg";
import DPSRKPLogo from "../assets/webp/dpsrkp-logo.webp";
import DPSRKPFallbackLogo from "../assets/jpg/dpsrkp-logo.jpg";
import SmvLogo from "../assets/webp/smv-logo.webp";
import SmvFallbackLogo from "../assets/jpg/smv-logo.jpg";

class Education extends React.Component {
  render() {
    return (
      <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
        <div className="inner-structure center" style={{ flexDirection: "column" }}>
          <TitleBar title="Education" />
          <Container fluid style={{ textAlign: "center" }}>
            <Row style={{ display: "inline-flex" }}>
              <EducationCard
                image={UMassLogo}
                fallback_image={UMassFallbackLogo}
                title="Amritsar college of engineering & Technology"
                address="Amritsar, Punjab, India"
                degree="Bachelor of Technology, (4 year program)"
                major="Computer Science and Engineering"
                class="Fulltime"
                duration="July 2017 - July 2021"
                grade="8.1 CGPA"
                details={
                  <React.Fragment>
                    • Major: Computer Science & Engineering (Development & Analysis)
                    <br />
                    • Major Subject, Data Structure & Algoriths, Big Data Analysis, Web Development
                    <br />
                    • Coding Experience, December 2017 - Present
                  </React.Fragment>
                }
              />
              <EducationCard
                image={DPSRKPLogo}
                fallback_image={DPSRKPFallbackLogo}
                title="Shree Jain Vidyalaya"
                address="Kolkata, West Bengal, India"
                degree="Higher Secondary"
                major="Science Group"
                class="Fulltime"
                duration="May 2014 - May 2016"
                grade={
                  <React.Fragment>
                    74%
                  </React.Fragment>
                }
                details={
                  <React.Fragment>
                    • Major subject- Chemistry, Mathematics, Physics, Hindi, English
                    <br />
                    • Optianal Subject- Computer Science
                    <br />
                    • Cleared NDA Examination.
                  </React.Fragment>
                }
              />
              <EducationCard
                image={SmvLogo}
                fallback_image={SmvFallbackLogo}
                title="Shree Maheshwary Vidyalaya"
                address="Kolkata, West Bengal, India"
                degree="Secondary"
                major="General"
                class="Fulltime"
                duration="Jan 2004 - May 2014"
                grade={
                  <React.Fragment>
                    75%
                  </React.Fragment>
                }
                details={
                  <React.Fragment>
                    • Major Science - Physical science, Life science, Mathematics
                    <br />
                    • Major Art - Geography, History, Hindi, English
                    <br />
                    • Major Commerce - Computer, Book Keeping
                    <br />
                    • Optianal Subject- Book Keeping (Commerce)
                    <br />
                    • Topper in The school
                  </React.Fragment>
                }
              />
            </Row>
          </Container>
          <TitleBar title="Certifications" />
          <Container fluid style={{ maxWidth: "95vw", textAlign: "center" }}>
            <Row style={{ alignItems: "center", display: "inline-flex", justifyContent: "center" }}>
              <CourseworkButton
                title="Reaact, The Complete Guide"
                // shortcode="Credencial - UC-4e122b00-297c-44ec-a8b9-6bf0fd5721b5"
                term="January 2022"
                institution="Udemy | Remote"
                link="https://www.udemy.com/certificate/UC-4e122b00-297c-44ec-a8b9-6bf0fd5721b5/"
              />
              <CourseworkButton
                title="Programming In C"
                shortcode="Credencial - 089977"
                term="July 2018"
                institution="Aptech, Howrah, India"
                link="https://m.aptech-education.com/genuine-aptech-certificate-advantage.aspx"
              />
              <CourseworkButton
                title="Workshop on IOT & DRONES"
                shortcode="campus, ACET"
                term="October 2018"
                institution="University college London | Remote"
                link="https://drive.google.com/file/d/16VBqQoD74-Sbk1lM2nDL1evnbQDB_3m2/view"
              />
              <CourseworkButton
                title="Programming In Python"
                shortcode="Credencial - 924205220163258661"
                term="February 2019"
                institution="MysirG.com | Remote"
                link="https://premium.mysirg.com/learn/certificate/924205-22016"
              />
              <CourseworkButton
                title="Deep Learning using Python and R"
                shortcode="Basics"
                term="June 2019"
                institution="Udemy | Remote"
                link="https://www.udemy.com/certificate/UC-ERWTXHKV/"
              />
              <CourseworkButton
                title="Python basics assessment"
                shortcode="Credencial - 0CDCA68392C3"
                term="July 2020"
                institution="HackerRank | Remote"
                link="https://www.hackerrank.com/certificates/0cdca68392c3"
              />
              <CourseworkButton
                title="Python programing"
                shortcode="Advanced Data Science"
                term="February 2021"
                institution="University of Michigan  | Coursera | Remote"
                link="https://www.coursera.org/account/accomplishments/verify/LDRFGAPY7RZF"
              />
              <CourseworkButton
                title="Ordinary Differential Equations"
                shortcode="MATH 331"
                term="Fall 2020"
                institution="University of Massachusetts Amherst"
                link="https://www.cics.umass.edu/content/fall-20-course-descriptions"
              />
              <CourseworkButton
                title="C for everyone"
                shortcode="Advanced Programming"
                term="February 2021"
                institution="Santa Cruz | Coursera | Remote"
                link="https://www.coursera.org/account/accomplishments/verify/H7PEZ54B5EVB"
              />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Education;
