import React from "react";
import Fade from 'react-reveal/Fade';

import PropTypes from "prop-types";

export default function TierCard({ tier }) {
  return (
    <Fade bottom cascade>
      <section className="tier-card">
        <p className="hero-description mb-1">TIER 1</p>
        <div className="tier-card-header" style={{ marginTop: 20 }}>
          {" "}
          {tier.name}{" "}
        </div>

        <p className="hero-description mb-1" style={{ marginTop: 20 }}>
          MAMP TOKEN TO STAKE
        </p>
        <h3 className="text-white">{tier.requirement}</h3>

        <p className="hero-description mb-1">POOL WEIGHT</p>
        <h3 className="text-white">{tier.pool_weight}</h3>

        <p className="hero-description mb-1">ALLOCATION TYPE</p>
        <h3 className="text-white">{tier.allocation}</h3>
        <div className="tier-card-footer" style={{ textAlign: "center" }}>
          <button className="tier-button" style={{ textAlign: "center" }}>
            STAKE NOW
          </button>
        </div>
      </section>
    </Fade>
  );
}

TierCard.propTypes = {
  tier: PropTypes.object.isRequired,
};
