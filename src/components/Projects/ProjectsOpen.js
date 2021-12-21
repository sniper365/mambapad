import React, { Component } from "react";

import CustomCard from "./CustomCard";
import PoolCard from "./PoolCard";

import { projects } from "../../assets/variables";
import leftsidebigmamba from "../../assets/img/leftside_Big_mamba.png";

export default class ProjectsOpen extends Component {
  render() {
    return (
      <>
        <h3
          className="col-12 text-center font-weight-bold sub-title"

        >
          ACTIVE POOLS
        </h3>
        <section className="projects">
          {projects.map((project, index) => {
            return (
              project.status === "Open" && (
                <CustomCard key={index} project={project} />
              )
            );
          })}
        </section>
        <div>
          <img
            src={leftsidebigmamba}
            alt="leftsidebigmamba"
            style={{ position: "absolute", width: "300px", top:520 }}
          />
        </div>
        <section className="projects">
          {projects.map((project, index) => {
            return <PoolCard key={index} project={project} />;
          })}
        </section>
        <hr style={{ border: '1px solid #fdac42' }} />
      </>
    );
  }
}
