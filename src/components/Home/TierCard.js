import React from "react";

import PropTypes from "prop-types";

export default function TierCard({ tier }) {
  return (
    <section className="tier-card">
      <p className="hero-description mb-1" >TIER 1</p>
      <div className="tier-card-header" style={{marginTop:20}}> {tier.name} </div>
      
      {/* <div className="tier-card-body"> */}
        <p className="hero-description mb-1" style={{marginTop:20}}>MAMP TOKEN TO STAKE</p>
        <h3 className="text-white">{tier.requirement}</h3>

        <p className="hero-description mb-1">POOL WEIGHT</p>
        <h3 className="text-white">{tier.pool_weight}</h3>

        <p className="hero-description mb-1">ALLOCATION TYPE</p>
        <h3 className="text-white">{tier.allocation}</h3>
      {/* </div> */}
      <div className="tier-card-footer" style={{textAlign:'center'}}>
        <button className="tier-button" style={{textAlign:'center'}}>
          STAKE NOW
        </button>
      </div>
    </section>
  );
}

TierCard.propTypes = {
  tier: PropTypes.object.isRequired,
};
