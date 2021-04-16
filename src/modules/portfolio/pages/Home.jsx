import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Typed from 'typed.js';
import Bgimage from '../../../../deploy/public/img/backgound.gif';

class Introduction extends React.Component {
  componentDidMount() {
    this.typed_options = {
      strings: [
        'Software Engineer @ Plaxonic Technology',
        'Technical Content Writer @ GeeksforGeeks',
        'Technical Tutor @ The Dimension',
        'Data Analysis Enthusiast',
        'Research Dreamer',
      ],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
      showCursor: false,
      smartBackspace: false,
      backDelay: 2000,
    };
    this.typed = new Typed(this.el, this.typed_options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div
        className="header center outer-structure"
        style={{ backgroundImage: `url(${Bgimage})` }}
      >
        <Container fluid>
          <Row className="justify-content-center">
            <Col lg="12">
              <h1 id="heading-name" style={{ background: 'none' }}>
                AKASH CHOWRASIA
              </h1>
              <h3 id="heading-desc">
                <span
                  ref={(el) => {
                    this.el = el;
                  }}
                />
                &nbsp;
              </h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Introduction;
