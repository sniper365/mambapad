import React from "react";

import PropTypes from "prop-types";

export default function TierCard({ tier }) {
  return (
    <section className="tier-card">
      <p className="hero-description mb-1">TIER 1</p>
      <div className="tier-card-header"> {tier.name} </div>
      
      <div className="tier-card-body">
        <p className="hero-description mb-1">MAMP TOKEN TO STAKE</p>
        <h2 className="text-white">{tier.requirement}</h2>

        <p className="hero-description mb-1">POOL WEIGHT</p>
        <h5 className="text-white">{tier.pool_weight}</h5>

        <p className="hero-description mb-1">ALLOCATION TYPE</p>
        <h5 className="text-white">{tier.allocation}</h5>
      </div>
      <div className="tier-card-footer" style={{textAlign:'center'}}>
        <button className="button-large" style={{textAlign:'center'}}>
          STAKE NOW
        </button>
      </div>
    </section>
  );
}

TierCard.propTypes = {
  tier: PropTypes.object.isRequired,
};
