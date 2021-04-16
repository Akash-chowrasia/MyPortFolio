import React from "react";
import {Button, Container, Row, Col, Nav, Navbar} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";

import TitleBar from "../components/TitleBar";
import ProfessionalHeadshot from "../assets/webp/professional-me.webp";
import FallbackProfessionalHeadshot from "../assets/jpg/professional-me.jpg";

class About extends React.Component {
  render() {
    return (
      <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
        <div className="inner-structure center" style={{ flexDirection: "column" }}>
          <TitleBar title="About Me" />
          <Container fluid style={{ padding: "1.5em" }}>
            <Row className="justify-content-center" style={{ alignItems: "center" }}>
              <Col style={{ textAlign: "center" }}>
                <picture>
                  <source cclassName="header-img" type="image/webp" srcset={ProfessionalHeadshot} />
                  <img className="header-img" src={FallbackProfessionalHeadshot} alt="header" fluid />
                </picture>
              </Col>
            </Row>
            <Row className="justify-content-center" style={{ alignItems: "center" }}>
              <Col lg="10">
                <p
                  id="about"
                  className="secondary-text"
                  style={{
                    padding: "25px 10px",
                    textAlign: "justify",
                    color: "#111111",
                    margin: "0w",
                  }}
                >
                  This is ME, Akash chowrasia, a final year undergraduate from Amritsar college of engineering & technology.
                  A budding Full-Stack Software Engineer, and a Competitive Programming Enthusiast  ,
                  who is obsessed with the idea of improving himself and wants a platform to grow and excel  in the field
                  of Reasearch & Development.
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Button className="resume-btn" href="/resume.pdf" target="_blank" size="lg">
                <FontAwesomeIcon icon={faFileAlt} /> Résumé
              </Button>
              <Button
                className="resume-btn"
                href="https://wbfbwbalyqslf9zsesgzba-on.drv.tw/web/"
                target="_blank"
                size="lg"
              >
                <FontAwesomeIcon icon={faGlobe} /> Old Website
              </Button>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
