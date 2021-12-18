import React from "react";
import { Row, Form } from "react-bootstrap";

const StakeCard = () => {
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
            <h3 style={{ marginBottom: 10 }}>STAKE </h3>
          </div>
          <div className="stake-card-body">
            <section>
              <h3 style={{ marginBottom: 0, fontSize: "14px" }}>STAKED AMOUNT </h3>
              <Form.Control style={{ marginBottom: "20px" }} />
              <h3 style={{ marginBottom: 0, fontSize: "14px" }}>MAMP BALANCE</h3>
              <Form.Control style={{ marginBottom: "20px" }} />
            </section>
            <div className="stake-card-percentbuttons ">
              <button
                class="stake-small-button"
                style={{ textAlign: "left", marginRight:'30px' }}
              >
                25%
              </button>
              <button
                class="stake-small-button"
                style={{ textAlign: "center", marginRight:'30px'  }}
              >
                50%
              </button>
              <button
                class="stake-small-button"
                style={{ textAlign: "center", marginRight:'30px'  }}
              >
                75%
              </button>
              <button
                class="stake-small-button"
                style={{ textAlign: "center"  }}
              >
                100%
              </button>
            </div>
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

export default StakeCard;
