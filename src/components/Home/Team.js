import React, { Component } from "react";

import TeamCard from "./TeamCard";

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
