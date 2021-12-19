import React, { Component } from "react";

import img from "../../assets/img/roadmap_whole.png";

export default class RoadMap extends Component {
  render() {
    return (
      <>
        <section className="container roadmap">
          <h3 className="col-12 text-center font-weight-bold  sub-title">
            ROADMAP
          </h3>
          <p className="text-center">
            Quam a at nisl, vulputate blandit etiam. Lacinia cras enim sit
            viverra imperdiet. Id malesuada eget scelerisque elit.
          </p>
          <div className="img-roadmap" style={{textAlign:'center'}}>
            <img
              src={img}
              alt="network"
              style={{ width: 800 + "px", margin:'0 100px',}}
            />
          </div>
        </section>
        <hr style={{ borderColor: "#f1b90c", marginTop:'100px' }} />
      </>
    );
  }
}
