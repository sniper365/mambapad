import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import partnerbtn from "../../assets/img/partner-btn.png";
import leftmamba from "../../assets/img/leftside_mamba.png"
// import AdvisorCard from "./AdvisorCard";

// import { advisors } from "../../assets/variables";

export default class Partners extends Component {
  render() {
    return (
      <>
        <section className="container">
          <section className=" partner">
            <h3 className="col-12 text-center font-weight-bold sub-title">
              PARTNERS
            </h3>
            <img src={leftmamba} alt='leftmamba' style={{position:'absolute',width:300,left:0, top:'610%'}}/>
            <span className="partner partner-btn">
              <button>
                <img src={partnerbtn} alt="samsara" />
              </button>
            </span>
            <button className="partner partner-btn">
              <img src={partnerbtn} alt="samsara" />
            </button>
            <button className="partner partner-btn">
              <img src={partnerbtn} alt="samsara" />
            </button>
          </section>
          <section className="release">
            <h3 className="col-12 text-center font-weight-bold sub-title">
              PRESS RELEASE
            </h3>
            <button className="partner partner-btn">
              <img src={partnerbtn} alt="samsara" />
            </button>
            <button className="partner partner-btn">
              <img src={partnerbtn} alt="samsara" />
            </button>
            <button className="partner partner-btn">
              <img src={partnerbtn} alt="samsara" />
            </button>
          </section>
        </section>
        <hr style={{ borderColor: "#f1b90c", marginTop:'80px' }} />
      </>
    );
  }
}
