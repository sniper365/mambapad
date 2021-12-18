import React from "react";
import { Row, Col } from "react-bootstrap";
import RewardCard from "./A_Reward";
import StakeCard from "./A_Stake";
import UnstakeCard from "./A_Unstake";

import stakingmamba from "../../assets/img/stake-mamba.png";

const Cards = () => {
  return (
    <>
      <section className="container" style={{ marginTop: "30px" }}>
        <Row>
          <Col>
            <StakeCard />
          </Col>
          <Col>
            <RewardCard />
          </Col>
          <Col>
            <UnstakeCard />
          </Col>
          <img
            src={stakingmamba}
            alt="stakingmamba"
            style={{ position: "absolute", zIndex: "-1", width: 300, right: 0, top:'10%' }}
          />
        </Row>
      </section>
      <hr style={{ borderColor: "#f1b90c", marginTop: "10px" }} />
    </>
  );
};

export default Cards;
