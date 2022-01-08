import React from "react";
import Fade from "react-reveal/Fade";

import { BiLock, BiCheckSquare, BiRocket, GiPlatform } from "react-icons/all";

import PropTypes from "prop-types";

export default function FeatureCard({ feature }) {
  return (
    <Fade bottom cascade>
      <section className="feature-card">
        <div>
          <feature.picture size={50} />
        </div>
        <div className="feature-card-header"> {feature.feature} </div>

        <div className="feature-card-body">
          <p className="hero-description mb-1">{feature.description}</p>
        </div>
        <div className="feature-card-footer">
          <button className="card-button-small">{feature.btn_1}</button>
          {feature.btn_2 && (
            <button className="card-button-small">{feature.btn_2}</button>
          )}
        </div>
      </section>
    </Fade>
  );
}

FeatureCard.propTypes = {
  feature: PropTypes.object.isRequired,
};
