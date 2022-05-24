import React from "react";
import {Button, Col} from "react-bootstrap";

const ProjectCard = (props) => {
  return (
    <Col>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            {/*<picture>*/}
            {/*  <source className="flip-card-img" type="image/webp" srcset={props.image} />*/}
            {/*  <img className="flip-card-img" src={props.fallback_image} alt="Avatar" />*/}
            {/*</picture>*/}
            <h3>{props.title}</h3>
            {props.organization}
            <sm>{props.date}</sm>
            {props.major}
          </div>
          <div class="flip-card-back">
            <t>{props.alternateTitle}</t>
            <sm>{props.skills}</sm>
            <br />
            <imp style={{ textAlign: "justify" }}>
              <sm>{props.details}</sm>
            </imp>
            <div>
              <a href={props.redirectionUrl} target="_blank" rel="noreferrer">
                <Button style={{background:'#0f2027', borderColor:'black'}}>
                  View
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
