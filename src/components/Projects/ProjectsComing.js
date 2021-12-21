import React, { Component } from "react";

import CustomCard from "./CustomCard";

import { projects } from "../../assets/variables";
import rightsidemamba from "../../assets/img/rightsidemamba.png";


export default class ProjectsComing extends Component {
  render() {
    return (
      <>
        <h3
          className="col-12 text-center font-weight-bold sub-title"

        >
          PROJECTS COMING SOON
        </h3>
        {/* <div> */}
            <img src={rightsidemamba} alt="rightmamba" style={{position:'absolute',width:250,right:-50,}} />
          {/* </div> */}
        <section className="projects">
          {projects.map((project, index) => {
            return <CustomCard key={index} project={project} />;
            // return project.status === 'Coming' && <CustomCard key={index} project={project} />
          })}
        </section>
        <hr style={{ border: '1px solid #fdac42' }} /> 
      </>
    );
  }
}
