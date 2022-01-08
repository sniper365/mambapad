import React, { Component } from "react";

import partnerbtn from "../../assets/img/new-samsara.png";
import leftmamba from "../../assets/img/leftside_mamba.png";
import Fade from "react-reveal/Fade";


export default class Partners extends Component {
  render() {
    return (
      <>
        <section className="container">
          <Fade bottom cascade>
            <section className=" partner">
              <h3 className="col-12 text-center font-weight-bold sub-title">
                PARTNERS
              </h3>
              <div className="partner-btns">
                <img src={partnerbtn} alt="samsara" />
                <img src={partnerbtn} alt="samsara" />
                <img src={partnerbtn} alt="samsara" />
              </div>
            </section>
            <section className="release">
              <h3 className="col-12 text-center font-weight-bold sub-title">
                PRESS RELEASE
              </h3>
              <div className="partner-btns" style={{ textAlign: "center" }}>
                <img
                  src={partnerbtn}
                  alt="samsara"
                  style={{ cursor: "pointer" }}
                />
                <img
                  src={partnerbtn}
                  alt="samsara"
                  style={{ cursor: "pointer" }}
                />
                <img
                  src={partnerbtn}
                  alt="samsara"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </section>
          </Fade>
        </section>
        <hr style={{ borderColor: "#f1b90c", marginTop: "80px" }} />
      </>
    );
  }
}
