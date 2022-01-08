import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import TeamCard from "./TeamCard";
import leftmamba from "../../assets/img/leftside_mamba.png";

import { teams } from "../../assets/variables";

export default class Team extends Component {
  render() {
    return (
      <>
        <section className="container team">
          <h3 className="col-12 text-center font-weight-bold sub-title">
            TEAM
          </h3>
          <p className="hero-description text-center">
            Our mentors are a great part of our team.
          </p>
          <Fade right>
            <div className="partner-mamba">
              <img
                src={leftmamba}
                alt="leftmamba"
                style={{
                  position: "absolute",
                  width: 300,
                  left: 0,
                  top:100,
                }}
              />
            </div>
          </Fade>
          <div className="projects">
            {teams.map((team, index) => {
              return <TeamCard key={index} team={team} />;
            })}
          </div>
        </section>
        <hr style={{ borderColor: "#f1b90c", marginTop: "80px" }} />
      </>
    );
  }
}
