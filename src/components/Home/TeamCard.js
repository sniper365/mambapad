import React from "react";
import { Container, Row, Col, Table, Card } from "react-bootstrap";
import Fade from "react-reveal/Fade";

import { FaTelegramPlane, FaLinkedinIn } from "react-icons/all";

import PropTypes from "prop-types";

export default function TeamCard({ team }) {
  return (
    <section className="team-card">
        <Row>
          <Col>
            <Fade bottom>
              <div className="team-card-image">
                <img src={team.picture} alt="avatar"></img>
              </div>
            </Fade>
          </Col>
          <Col>
            <Fade bottom cascade>
              <div className="team-card-body">
                <h5 className="text-left text-white">{team.name}</h5>
                <p className="text-left">{team.position}</p>
                <div className="social-links mb-3">
                  <a href="www.google.com">
                    <FaTelegramPlane className="social-link" />
                  </a>
                  <a href="www.google.com">
                    <FaLinkedinIn className="social-link" />
                  </a>
                </div>
                {/* <p className="text-left">{team.company}</p> */}
              </div>
            </Fade>
          </Col>
        </Row>
    </section>
  );
}

TeamCard.propTypes = {
  team: PropTypes.object.isRequired,
};
