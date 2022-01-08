import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import TierCard from "./TierCard";

import { tiers } from "../../assets/variables";
import rightsidemamba from "../../assets/img/rightsidemamba.png";

export default class TierSystem extends Component {
  render() {
    return (
      <>
        <section className="container tier">
            <div className="tiersystem-mamba">
          <Fade left>
              <img src={rightsidemamba} alt="rightmamba" />
          </Fade>
            </div>
          <h3 className="col-12 text-center font-weight-bold sub-title">
            TIER SYSTEM
          </h3>
          <p className="text-center">
            Quam a at nisl, vulputate blandit etiam. Lacinia cras enim sit
            viverra imperdiet. Id malesuada eget scelerisque elit.
          </p>
          <section className="projects">
            {tiers.map((tier, index) => {
              return <TierCard key={index} tier={tier} />;
            })}
          </section>
        </section>
        <hr style={{ borderColor: "#f1b90c" }} />
      </>
    );
  }
}
