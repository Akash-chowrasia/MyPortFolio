import React from "react";
import { Container, Row } from "react-bootstrap";

import TitleBar from "../components/TitleBar";
import AchievementsCard from "../components/AchievementsCard";

class Achievements extends React.Component {
  render() {
    return (
      <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
        <div className="center inner-structure" style={{ flexDirection: "column" }}>
          <TitleBar title="Achievements & Awards" />
          <Container fluid>
            <Row className="justify-content-center" style={{ alignItems: "center" }}>
              <AchievementsCard
                title="Solitaire Award"
                institution="Sopra Steria"
                date="January 2022"
                details={
                  <React.Fragment>
                    ✔ I Recieved This Award For good team play.<br />
                    ✔ I had a good participation on completing tasks related to React Js actively.
                  </React.Fragment>
                }
              />
              <AchievementsCard
                title="Best Trainee"
                institution="Amritsar college of Engineering & Technology"
                date="May 2018"
                details={
                  <React.Fragment>
                    ✔ I Recieved this honor in Institutional training and development program organised by college.<br />
                    ✔ It was a C++ training program.<br />
                    ✔ I have recieved this honor on bahalf of my active response and project Quiz game.
                  </React.Fragment>
                }
              />
              <AchievementsCard
                title="Best Project Developer"
                institution="Amritsar college of Engineering & Technology"
                date="June 2019"
                details={
                  <React.Fragment>
                    ✔ I have been declared as one of the best project developer in the department.<br />
                    ✔ I recieved this honor with reference of my Projects Quiz Game & Smarty.
                  </React.Fragment>
                }
              />
              <AchievementsCard
                title="Article Publication"
                institution="GeeksforGeeks"
                date="Jan 2020 - Dec 2020"
                details={
                  <React.Fragment>
                    ✔ published 5 Technical Articles at Geeksforgeeks.<br/>
                    ✔ Topics were Cyber security, Hadoop & Competitive coding.
                  </React.Fragment>
                }
              />
              <AchievementsCard
                title="Paper Publication"
                institution="International Conferences"
                date="September 2020, September 2021"
                details={
                  <React.Fragment>
                    ✔ published 2 papers successfully in international conferences as main author.<br/>
                    ✔ In ICDSML - "A case study on Crime Dataset, Maryland - US".<br/>
                    ✔ In FCDSEGS - "Documentary review 'Role of Technical Doctrines in Space Science'".
                  </React.Fragment>
                }
              />
              <AchievementsCard
                title="JEE Mains/ Advance"
                institution="Mentor classes"
                date="June 2017"
                details={
                  <React.Fragment>
                    ✔ I have cracked Jee Mains & Jee Advance in 2017 from Mentor classes, Patna
                  </React.Fragment>
                }
              />
              <AchievementsCard
                title="Third Prize"
                institution="Shree Maheshwary Vidyalaya, Kolkata"
                date="August 2014"
                details={
                  <React.Fragment>
                    ✔ I Got Third Prize in My secondary school for being third topper with a total marks of 75%
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

export default Achievements;
