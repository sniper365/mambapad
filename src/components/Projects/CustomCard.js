import React from "react";

import PropTypes from "prop-types";

import {
  SiWebpack,
  AiFillTwitterCircle,
  AiOutlineMedium,
  FaTelegramPlane,
  BsCircleFill,
} from "react-icons/all";
import { ProgressBar } from "react-bootstrap";

export default function CustomCard({ project }) {
  return (
    <section className="custom-card">
      <div className="custom-card-header">
        <a href="/">
          <img src={project.picture} alt="project profile"></img>
        </a>
        <div className="custom-card-title">
          <strong>{project.name}</strong>
          <div className="social-links">
            <a href="https://www.google.com">
              <SiWebpack className="social-link" />
            </a>
            <a href="https://www.twitter.com">
              <AiFillTwitterCircle className="social-link" />
            </a>
            <a href="https://www.medium.com">
              <AiOutlineMedium className="social-link" />
            </a>
            <a href="https://www.telegram.com">
              <FaTelegramPlane className="social-link" />
            </a>
          </div>          
        </div>
      </div>
      <div className="custom-card-body">
        {project.message}        
      </div>
      <div className="custom-card-footer">
        <div className="join-button">
          <button class="customcard-button">JOIN POOL</button>
        </div>
      </div>
    </section>
  );
}

CustomCard.propTypes = {
  project: PropTypes.object.isRequired,
};
