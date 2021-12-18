import React from "react";
import { Row, Form } from "react-bootstrap";
import Countdown from "react-countdown";
import IdleTimer from "react-idle-timer";

const UnstakeCard = () => {

    
  return (
    <section style={{marginTop:'50px'}}>
      <section>
        <div className="stake-information-card">
          <h5 className="text-left text-white" style={{marginBottom:0}}>
          Total Staked : 54654
          </h5>
        </div>
      </section>
      <section className="stake">
        <div className="stake-stake-card">
          <div className="stake-card-header">
            <h3 style={{ marginBottom: 10 }}>UNSTAKE </h3>
          </div>
          <div className="stake-card-body">
            <section>
              <h3 style={{ marginBottom: 0, fontSize: "14px" }}>STAKED AMOUNT </h3>
              <Form.Control style={{ marginBottom: "20px" }} />
              <h3 style={{ marginBottom: 0, fontSize: "14px" }}>UNSTAKE BOX</h3>
              <Form.Control style={{ marginBottom: "20px" }} />
            </section>
            <section style={{ border: "1px solid orange", margin:'10px 2em', borderRadius:'5px' }}>
              <div style={{ fontSize: "2em", textAlign: "center" }}>
                <Countdown date={Date.now() + 400000000} autoStart={true} />
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding:'3px 0',
                  fontSize:'0.8em',
                  border: "1px solid orange",
                  borderRadius:'5px'
                }}
              >
                <strong style={{ textAlign: "center", margin: "0 10px" }}>
                  DAY
                </strong>
                <strong style={{ textAlign: "center", margin: "0 10px" }}>
                  HR
                </strong>
                <strong style={{ textAlign: "center", margin: "0 10px" }}>
                  MIN
                </strong>
                <strong style={{ textAlign: "center", margin: "0 10px" }}>
                  SEC
                </strong>
              </div>
            </section>
          </div>
          <button
            class="poolcard-button"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            JOIN POOL
          </button>
        </div>
      </section>
    </section>
  );
};

export default UnstakeCard;
