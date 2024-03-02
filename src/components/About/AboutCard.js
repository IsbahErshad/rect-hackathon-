import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, we are <span className="purple">BH08  </span>
            from <span className="purple"> Sahyadri college of engineering and Management</span>
            
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> reading books
            </li>
            <li className="about-activity">
              <ImPointRight />eating
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
           {" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
