import React, { useMemo, useState, useEffect } from "react";
import { Row, Form, FormControl } from "react-bootstrap";
import Countdown from "react-countdown";

const RewardCard = () => {
  
 

  return (
    <section style={{ marginTop: "50px" }}>
      <section>
        <div className="stake-information-card">
          <h5 className="text-left text-white" style={{ marginBottom: 0 }}>
            Total Staked : 54654
          </h5>
        </div>
      </section>
      <section className="stake">
        <div className="stake-stake-card">
          <div className="stake-card-header">
            <h3 style={{ marginBottom: 10 }}>REWARD </h3>
          </div>
          <div className="stake-card-body">
            <section>
              <h3 style={{ marginBottom: 0, fontSize: "14px" }}>
                HOLDER REWARD(ALL-TIME)
              </h3>
              <Form.Control style={{ marginBottom: "20px" }} />
              <h3 style={{ marginBottom: 0, fontSize: "14px" }}>
                HOLDER REWARD (24H)
              </h3>
              <Form.Control style={{ marginBottom: "20px" }} />
            </section>
            <div className="stake-card-percentbuttons ">
              <button
                class="stake-small-button"
                style={{ textAlign: "left", marginRight: "30px" }}
              >
                25%
              </button>
              <button
                class="stake-small-button"
                style={{ textAlign: "center", marginRight: "30px" }}
              >
                50%
              </button>
              <button
                class="stake-small-button"
                style={{ textAlign: "center", marginRight: "30px" }}
              >
                75%
              </button>
              <button
                class="stake-small-button"
                style={{ textAlign: "center" }}
              >
                100%
              </button>
            </div>
            <section
              style={{
                margin: "10px 2em",
                border: "1px solid orange",
                borderRadius: "5px",
              }}
            >
              <div style={{ fontSize: "2em", textAlign: "center" }}>
                <Countdown date={Date.now()+5000000} daysInHours />
              </div>
              <div
                style={{
                  fontSize: "0.8em",
                  textAlign: "center",
                  padding: "3px 0",
                  border: "1px solid orange",
                  borderRadius: "5px",
                }}
              >
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
            {/* <DraftCountdown/> */}
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

export default RewardCard;
