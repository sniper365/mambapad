// import React, { Component } from "react";
// import { Container, Row, Col, Table, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

// import logo from "../assets/img/logo.png";
// import member_0 from "../assets/img/team-picture.png";

// export default class Footer extends Component {
//   render() {
//     return (
//       <section className="container footer">
//           <Row>
//             <Col>
//               <Link to="/">
//                 <img src={logo} alt="logo"></img>
//               </Link>
//             </Col>
//             <Col>dsfd</Col>
//             <Col className="footer-card">
//               <Row></Row>
//               <Row></Row>
//             </Col>
//           </Row>
//       </section>
//     );
//   }
// }

import React, { Component } from "react";
import { Container, Row, Col, Table, Card } from "react-bootstrap";
import {
  FaTwitter,
  FaTelegram,
  FaDiscord,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/all";
import { Link } from "react-router-dom";

import logo from "../assets/img/logo.png";
import tweeter from "../assets/img/team-picture.png";

export default class Footer extends Component {
  render() {
    return (
      <>
        <section className="footer">
          <Container>
            <Row>
              <Col md={4}>
                <Link to="/">
                  <img src={logo} alt="logo" style={{ marginTop: 50 }}></img>
                </Link>
              </Col>
              <Col md={4}>
                <div style={{ margin: "80px 0" }}>
                  <FaTelegram
                    size={30}
                    style={{ marginRight: "20px", cursor: "pointer" }}
                  />
                  <FaTwitter
                    size={30}
                    style={{ marginRight: "20px", cursor: "pointer" }}
                  />
                  <FaDiscord
                    size={30}
                    style={{ marginRight: "20px", cursor: "pointer" }}
                  />
                  <FaInstagram
                    size={30}
                    style={{ marginRight: "20px", cursor: "pointer" }}
                  />
                  <FaLinkedinIn
                    size={30}
                    style={{ marginRight: "20px", cursor: "pointer" }}
                  />
                  <FaYoutube
                    size={30}
                    style={{ marginRight: "20px", cursor: "pointer" }}
                  />
                </div>
              </Col>
              <Col md={4}>
                <section  className="footer-card">
                <div className="custom-card-header">
                  <a href="/">
                    <img
                      src={tweeter}
                      alt="project profile"
                      style={{ width: 50 }}
                    ></img>
                  </a>
                  <div className="custom-card-title">
                    <strong>John Doe</strong>
                    <strong>@John Doe</strong>
                  </div>
                  <FaTwitter size={30} style={{ marginLeft: 100 }} />
                </div>
                <div className="custom-card-footer">
                  <strong style={{textAlign:"left"}}>
                    Mauris feugiat consectetur massa leo sed augue. Lacinia eget
                    tempus, amet, mauris placerat elit, sed dictumst fermentum.
                    Nullam duis lorem.
                  </strong>
                </div>
                </section>
              </Col>
            </Row>
          </Container>
        </section>
        <hr style={{ borderColor: "#f1b90c", marginTop: "10px" }} />
        <p style={{textAlign:"center", color:'grey'}}>Copyright © 2021, MAMBAPAD. All Right Reserved</p>
      </>
    );
  }
}
