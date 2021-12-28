import React, { useEffect, useContext } from "react";
import { useWeb3React } from "@web3-react/core";
import { Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { useModal } from "../../contexts/modalContext";
import Fade from "react-reveal/Fade";

import { getBalanceAmount } from "../../utils/formatBalance";
import {
  FaTwitter,
  FaTelegram,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaDiscord,
} from "react-icons/all";
import polygons from "../../assets/img/eightpolygons.png";
import MediaPlayer from "../../components/MediaPlayer";
import "video-react/dist/video-react.css";
import { getLeosContract } from "../../utils/contractHelpers";

const Hero = () => {
  const { account, library } = useWeb3React();
  const { setModal } = useModal();

  useEffect(() => {
    const getBalancer = async (account) => {
      console.info(account);
      if (account) {
        const bnb = await library.getSigner().getBalance();
        console.info("bnb", getBalanceAmount(bnb.toString(), 18) * 1.0);
        const leos = await getLeosContract(library.getSigner()).balanceOf(
          account
        );
        console.info(getBalanceAmount(leos.toString(), 8) * 1.0);
        return bnb, leos;
      }
    };
    getBalancer(account);
  }, [account, library]);

  return (
    <>
      <section className="container hero">
        <div className="row">
          <Fade bottom>
            <div className="col-lg-6" style={{ marginTop: "20px" }}>
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
              </p>
              <p className="hero-description">
                ac. Tincidunt cursus placerat lorem mi ac rhoncus eu. Id in
              </p>
              <p className="hero-description">
                integer risus, fames mi, luctus.
              </p>
              <br />
              <button
                type="button"
                className="btn btn-warning button-large"
                onClick={() => toast("Balance insufficient!")}
              >
                BUY NOW
              </button>
              <button
                type="button"
                className="btn btn-default button-large-default"
                onClick={() =>
                  setModal(
                    <div>
                      <h1>Hahahahahah</h1>
                      <div>
                        <h2>hehehehe</h2>
                      </div>
                    </div>
                  )
                }
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
            </div>
          </Fade>
          <div className="col-lg-6" style={{ marginRight: "0" }}>
            <div className="hero-polygons">
              <img src={polygons} alt="eightpolygons" />
            </div>
            <Fade right>
              <MediaPlayer />
            </Fade>
          </div>
        </div>
      </section>
      <hr style={{ borderColor: "#f1b90c" }} />
    </>
  );
};

export default Hero;
