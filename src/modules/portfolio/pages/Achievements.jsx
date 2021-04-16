import React from 'react';
import { Container, Row } from 'react-bootstrap';

import TitleBar from '../components/TitleBar';
import AchievementsCard from '../components/AchievementsCard';

class Achievements extends React.Component {
  render() {
    return (
      <div
        className="primary outer-structure"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <div
          className="center inner-structure"
          style={{ flexDirection: 'column' }}
        >
          <TitleBar title="Achievements & Awards" />
          <Container fluid>
            <Row
              className="justify-content-center"
              style={{ alignItems: 'center' }}
            >
              <AchievementsCard
                title="Best Trainee"
                institution="Amritsar college of Engineering & Technology"
                date="May 2018"
                details={
                  <>
                    I got Awarded as Best Trainee among all the students of the
                    batch 2017-2021 in my college by Computer science and
                    engineering society.
                  </>
                }
              />
              <AchievementsCard
                title="Best Project Developer"
                institution="Amritsar college of Engineering & Technology"
                date="June 2019"
                details={
                  <>
                    Recognised as One of Best Project developer in Amritsar
                    college of engineering and Technology for the duration of my
                    college tenure.
                  </>
                }
              />
              <AchievementsCard
                title="Article Publication"
                institution="GeeksforGeeks"
                date="Jan 2020 - Dec 2020"
                details={
                  <>
                    Successfully published 5 Technical Articles at Geeksforgeeks
                    based on Cyber security, Hadoop & Competitive programming.
                  </>
                }
              />
              <AchievementsCard
                title="Paper Publication"
                institution="International Conference"
                date="September 2020"
                details={
                  <>
                    I have published a paper on "A case study on Crime Dataset,
                    Maryland - US" in "International Conference On Data Science
                    and Machine Learning, 2020" as The main Author.
                  </>
                }
              />
              <AchievementsCard
                title="JEE Mains/ Advance"
                institution="Mentor classes"
                date="June 2017"
                details={
                  <>
                    I have cracked Jee Mains & Jee Advance in 2017 from Mentor
                    classes, Patna
                  </>
                }
              />
              <AchievementsCard
                title="Third Prize"
                institution="Shree Maheshwary Vidyalaya, Kolkata"
                date="August 2014"
                details={
                  <>
                    I Got Third Prize in My secondary school for being third
                    topper with a total marks of 75%
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

export default Achievements;
