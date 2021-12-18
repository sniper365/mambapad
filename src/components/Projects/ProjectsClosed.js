import React, { Component } from "react";

import CustomCard from "./CustomCard";

import { projects } from "../../assets/variables";
import leftmamba from "../../assets/img/leftside_mamba.png";

export default class ProjectsClosed extends Component {
  render() {
    return (
      <>
        <h1
          className="font-weight-bold text-white project-title"
          style={{ marginLeft: "100px" }}
        >
          PROJECTS CLOSED
        </h1>
        <img
          src={leftmamba}
          alt="leftmamba"
          style={{ position: "absolute", width: 300, left: 0, top: "530%" }}
        />

        <section className="projects">
          {projects.map((project, index) => {
            return (
              project.status === "Closed" && (
                <CustomCard key={index} project={project} />
              )
            );
          })}
        </section>
        <hr style={{ border: '1px solid #fdac42' }} />
      </>
    );
  }
}
