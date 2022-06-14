import React from "react";
import { Button, Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";

import TitleBar from "../components/TitleBar";
import ProfessionalHeadshot from "../assets/webp/professional-me.webp";
import FallbackProfessionalHeadshot from "../assets/jpg/professional-me.jpg";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
                    textAlign: "center",
                    color: "white",
                    margin: "0w",
                  }}
                >
                  I am Working with passion for myself. I think I am a good software engineer and I always look for new target and way to make myself more better.<br />
                  I like the feeling after beating those challenges that gives me confidence to tackle new hurdles.<br />
                  I believe in "The Secret" theory, that really works for me bunch of times in my life.<br />
                  I believe in "the future is the result of what we do today".<br />
                  I love development.
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Button className="resume-btn" href="/resume.pdf" target="_blank" size="lg">
                <FontAwesomeIcon icon={faFileAlt} /> Résumé
              </Button>
              <Button
                className="resume-btn"
                // href="https://wbfbwbalyqslf9zsesgzba-on.drv.tw/web/"
                href="https://www.linkedin.com/in/aksia/"
                target="_blank"
                size="lg"
              >
                {/* <FontAwesomeIcon icon={faGlobe} /> Old Website */}
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </Button>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
