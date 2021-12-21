import React from "react";
import {
  Row,
  Col,
  Table,
  Form,
} from "react-bootstrap";

import PropTypes from "prop-types";

export default function PoolCard({ project }) {
  return (
    <section className="pool-card">
      <div className="pool-card-header">
        <a href="/">
          <img src={project.picture} alt="project profile"></img>
        </a>
        <div className="pool-card-title">
          <strong>{project.name}</strong>
        </div>
        <div className="pool-card-title">
          <strong>{project.name}</strong>
        </div>
      </div>
      <div className="pool-card-body">
        <section>      
            <h4 style={{ marginBottom: 10, textAlign:'center' }}>Total Amount per IDO: X BNB </h4>
            <h4 style={{ marginBottom: 10, textAlign:'center'  }}>Pool OPEN: 12 APRIL 2022 17:00 UTC</h4>
            <h4 style={{ marginBottom: 0, textAlign:'center'  }}>Pool will be open for Y hours</h4>
          <Row style={{marginTop:'20px'}}>
            <Col lg={7} style={{marginTop:'10px'}}>
              <Table bordered hover variant="dark">
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
            <Col lg={5} style={{ padding: "0 30px" }}>
              <h3 style={{ marginBottom: 0,fontSize:'14px' }}>AMOUNT(BNB)</h3>
              <Form.Control style={{ marginBottom: "20px" }} />
              <div className="join-button">
                <button class="poolcard-button">JOIN POOL</button>
              </div>
              <h3 style={{ marginBottom: 0, marginTop: "70px",fontSize:'14px' }}>CONTRIBUTION</h3>
              <Form.Control />
            </Col>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Col lg={7}>
            <h3 style={{ marginBottom: 0,fontSize:'14px' }}>COUNTDOWN</h3>
              <Form.Control style={{ marginBottom: "20px" }} />
            </Col>
            <Col lg={5} style={{ padding: "0 30px" }}>
              {/* <div className="join-button"> */}
              <h3 style={{ marginBottom: 0,fontSize:'14px' }}>COMODO TOKEN</h3>
                <button class="poolcard-button">JOIN POOL</button>
              {/* </div> */}
            </Col>
          </Row>
        </section>
      </div>
    </section>
  );
}

PoolCard.propTypes = {
  project: PropTypes.object.isRequired,
};
