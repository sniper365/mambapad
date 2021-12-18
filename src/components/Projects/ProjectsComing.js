import React, { Component } from "react";

import CustomCard from "./CustomCard";

import { projects } from "../../assets/variables";
import rightsidemamba from "../../assets/img/rightsidemamba.png";


export default class ProjectsComing extends Component {
  render() {
    return (
      <>
        <h1 className="font-weight-bold text-white project-title" style={{marginLeft:'100px'}}>
          PROJECTS COMING SOON
        </h1>
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
