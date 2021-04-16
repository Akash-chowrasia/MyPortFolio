import React from 'react';
import { Col } from 'react-bootstrap';

const ExperienceCard = (props) => {
  return (
    <Col>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <picture>
              <img
                className="flip-card-img"
                src={props.fallback_image}
                alt="Avatar"
              />
            </picture>
            <t>{props.title}</t>
            {props.organization}
            <sm>{props.address}</sm>
          </div>
          <div className="flip-card-back">
            <t>{props.alternateTitle}</t>
            <sm>{props.duration}</sm>
            <br />
            <imp style={{ textAlign: 'justify' }}>
              <sm>{props.details}</sm>
            </imp>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ExperienceCard;
