import React, { useRef } from "react";

import {
  FaTwitter,
  FaTelegram,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaDiscord,
} from "react-icons/all";
import { Row, Col } from "react-bootstrap";

import polygons from "../../assets/img/eightpolygons.png";
import polygonmask from "../../assets/img/image-polygon.png";
import mambavideo from "../../assets/mamba.mp4";
import MediaPlayer from "../../components/MediaPlayer";
import "video-react/dist/video-react.css";

const Hero = () => {
  return (
    <>
      <section className="container hero">
        <Row>
          <Col style={{ marginTop: "20px" }}>
            <section className="bannerslogan">
              <div
                className="hero-title"
                style={{
                  color: "orange",
                  fontFamily: "fl3-palette",
                  fontStyle: "normal",
                  fontWeight: "bold",
                }}
              >
                EROS
                <span
                  style={{
                    color: "white",
                    fontFamily: "fl2-bernhard",
                    fontStyle: "normal",
                    fontWeight: "bold",
                  }}
                >
                  , MAGNA
                </span>
              </div>
              <div
                className="hero-title"
                style={{
                  color: "white",
                  fontFamily: "fl2-bernhard",
                  fontStyle: "normal",
                  fontWeight: "bold",
                }}
              >
                GET AT RHONCU
              </div>
            </section>
            <br />
            <p className="hero-description">
              Sed egestas quis commodo, faucibus commodo dictum dignissim nisl
              ac. Tincidunt cursus placerat lorem mi ac rhoncus eu. Id in
              integer risus, fames mi, luctus.
            </p>
            <br />
            <button type="button" className="btn btn-warning button-large">
              BUY NOW
            </button>
            <button
              type="button"
              className="btn btn-default button-large-default"
            >
              WHITEPAPER
            </button>
            <div style={{ marginTop: "40px" }}>
              <FaTelegram
                size={30}
                style={{ marginRight: "20px", cursor: "pointer" }}
              />
              <FaTwitter
                size={30}
                style={{ marginRight: "20px", cursor: "pointer" }}
              />
              <FaDiscord
                size={30}
                style={{ marginRight: "20px", cursor: "pointer" }}
              />
              <FaInstagram
                size={30}
                style={{ marginRight: "20px", cursor: "pointer" }}
              />
              <FaLinkedinIn
                size={30}
                style={{ marginRight: "20px", cursor: "pointer" }}
              />
              <FaYoutube
                size={30}
                style={{ marginRight: "20px", cursor: "pointer" }}
              />
            </div>
            <i className="bi bi-telegram"></i>
            <div style={{ marginTop: "20px" }}>
              <button type="button" className="btn btn-default button-small">
                AUDIT
              </button>
              <button type="button" className="btn btn-default button-small">
                AUDIT
              </button>
            </div>
          </Col>
          <Col style={{ marginRight: "0" }}>
            <div className="hero-polygons">
              <img src={polygons} alt="eightpolygons" />
            </div>
            <MediaPlayer />
            {/* <div className="media-box">
              <video  controls>
                <source src={mambavideo} type="video/mp4" />
              </video>
            </div> */}
            {/* <div className='hexagon'></div> */}
          </Col>
        </Row>
      </section>
      <hr style={{ borderColor: "#f1b90c" }} />
    </>
  );
};

export default Hero;
