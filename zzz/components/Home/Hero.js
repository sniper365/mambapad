import React, { Component } from "react";

import {
  FaTelegramPlane,
  FaMediumM,
  FaTwitter,
  FaTelegram,
} from "react-icons/all";
import { Container, Row, Col } from "react-bootstrap";

import animation from "../../assets/img/animation_polygon.png";
import polygons from "../../assets/img/polygons.png";
import partner_0 from "../../assets/img/partner_0.svg";
import partner_1 from "../../assets/img/partner_1.png";
import partner_2 from "../../assets/img/partner_2.png";

export default class Hero extends Component {
  render() {
    return (
      <Container className="hero">
        <Row>
          <Col>
            <div className="hero-title">
              EROS,{" "}
              <span style={{ color: "white", fontFamily: "Montserrat" }}>
                MAGNA GET AT RHONCU
              </span>
            </div>
            <p className="hero-description">
              Sed egestas quis commodo, faucibus commodo dictum dignissim nisl
              ac. Tincidunt cursus placerat lorem mi ac rhoncus eu. Id in
              integer risus, fames mi, luctus.
            </p>
            <button type="button" className="btn btn-warning button-large">
              BUY NOW
            </button>
            <button
              type="button"
              className="btn btn-default button-large-default"
            >
              WHITEPAPER
            </button>
            <div>
              <FaTelegram />
            </div>
            <i className="bi bi-telegram"></i>
            <div>
              <button type="button" className="btn btn-default button-small">
                AUDIT
              </button>
              <button type="button" className="btn btn-default button-small">
                AUDIT
              </button>
            </div>
          </Col>
          <Col>
            <div>
              <img className='animation-polygon' src={animation} alt="animation-polygon"></img>
            </div>
            <div>
              <img className='polygons' src={animation} alt="polygons"></img>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
