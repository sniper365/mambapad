import React, { Component } from "react";
import { Container, Row, Col, Table, Card } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
// import { Doughnut } from "react-chartjs-2";
// import { MDBContainer } from "mdbreact";
import FeatureCard from "./FeatureCard";

import { features } from "../../assets/variables";
import leftsidebigmamba from "../../assets/img/leftside_Big_mamba.png";
import doughnut from "../../assets/img/doughnut.png";

const MainFeatures = () => {
  //   const data = {
  //     labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  //     datasets: [
  //       {
  //         label: "Hours Studied in Geeksforgeeks",
  //         data: [2, 5, 6, 7, 3],
  //         backgroundColor: ["blue", "green", "yellow", "pink", "orange"],
  //       },
  //     ],
  //   };

  return (
    <>
      <section className="container feature">
        <div className="feature">
          <Zoom left>
            <div className="feature-mamba">
              <img src={leftsidebigmamba} alt="leftsidebigmamba" />
            </div>
          </Zoom>
          <Fade left>
            <h3 className="col-12 text-center font-weight-bold sub-title">
              MAIN FEATURES
            </h3>
            <p className="text-center">
              Quam a at nisl, vulputate blandit etiam. Lacinia cras enim sit
              viverra imperdiet. Id malesuada eget scelerisque elit.
            </p>
          </Fade>
          <section className="projects">
            {features.map((feature, index) => {
              return (
                <Fade bottom>
                  <FeatureCard key={index} feature={feature} />
                </Fade>
              );
            })}
          </section>
        </div>
        <section>
          <Fade cascade>
            <Card className="tokenomics">
              <Row>
                <Col lg md="6">
                  <h3 className="col-12 text-center font-weight-bold feature-title">
                    MAIN FEATURES
                  </h3>
                  <p className="text-center">
                    Quam a at nisl, vulputate blandit etiam. Lacinia cras enim
                    sit viverra imperdiet. Id malesuada eget scelerisque elit.
                  </p>
                  <Table
                    bordered
                    hover
                    variant="dark"
                    borderColor="red"
                    style={{ marginLeft: "10px", borderColor: "red" }}
                  >
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col lg md="6" style={{ marginTop: "30px" }}>
                  <img src={doughnut} alt="doughnut" />
                </Col>
              </Row>
              <Row style={{ marginTop: "30px" }}>
                <Table
                  bordered
                  hover
                  variant="dark"
                  style={{ marginLeft: "25px", marginRight: "25px" }}
                >
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Card>
          </Fade>
        </section>
      </section>
      <hr style={{ borderColor: "#f1b90c" }} />
    </>
  );
};

export default MainFeatures;
// import React, { Component } from 'react';

// import aboutus from '../../assets/img/aboutus.png';

// export default class AboutUs extends Component {
//     render() {
//         return (
//             <div className="container aboutus">
//                 <h2 className="col-12 text-center font-weight-bold text-white hero-title">About Us</h2>
//                 <div className="row">
//                     <div className="col-md-6 mx-3 mx-md-0">
//                         <p className="hero-description font-weight-bold">WHAT IS BSCPAD?</p>
//                         <p className="hero-description text-white font-weight-bold">The BSC Launch Pad is the first decentralized IDO platform for the Binance Smart Chain Network.</p>
//                         <p className="hero-description">BSCPad will empower crypto currency projects with the ability to distribute tokens and raise liquidity.</p><br />

//                         <p className="hero-description font-weight-bold">WHY CHOOSE US?</p>
//                         <p className="hero-description text-white font-weight-bold">BSCPad has found a solution to incentivize and reward all token holders in a way that is inclusive and with a low barrier to entry.</p>
//                         <p className="hero-description">The fundamental flaws of existing launchpads is that acquiring enough tokens to participate in the ecosystem is prohibitive, and even if you do hold the tokens, you are not guaranteed an allocation spot. They are based on a first come first serve basis where automated bots can fill the whitelist spots in a matter of seconds. BSCPad is creating fair decentralized launches.</p>

//                         <p className="hero-description">The hallmark of the BSCPad is a two-feature system that makes every tier level guaranteed an allocation. There is no luck, and no lotteries, and no bots; only fair distributed rewards for all participants.</p>
//                     </div>
//                     <div className="col-md-6 mx-3 mx-md-0 text-center rotation-container">
//                         <div className="rotation"></div>
//                         <img src={aboutus} alt="about us" />
//                     </div>
//                 </div>
//             </div >
//         );
//     }
// }
