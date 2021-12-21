import React, { useRef, useEffect } from "react";

import { ethers } from "ethers";

import {
  getBalanceAmount,
  getDecimalAmount,
  customProvider,
} from "../../utils/formatBalance";
import { useWeb3React } from "@web3-react/core";

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
import MediaPlayer from "../../components/MediaPlayer";
import "video-react/dist/video-react.css";
import { getLeosContract } from "../../utils/contractHelpers";
import { ethersToBigNumber, ethersToSerializedBigNumber } from "../../utils/bigNumber";


const Hero = () => {
  const { account, library } = useWeb3React();
  useEffect(() => {
    const getBalancer = async (account) => {
      console.info(account)
      if (account) {
        const bnb = await library.getSigner().getBalance();
        console.info('bnb',getBalanceAmount(bnb.toString(),18)*1.0)  
        const leos = await getLeosContract(library.getSigner()).balanceOf(account);  
        console.info(getBalanceAmount(leos.toString(),8)*1.0)
        return bnb, leos;
      }
    };
    getBalancer(account);
  }, [account, library]);

  // if (library) {
  //   console.info(library.getSigner().getBalance());
  //   const hex = library.getSigner().getBalance();
  //   console.info("hex", hex);
  //   const myBNB = getBalanceAmount(hex, 18);
  //   const myBNB2 = getDecimalAmount(hex, 18);
  //   console.info(myBNB, myBNB2);
  // }

  // console.info(ethers.utils.formatEther(balance))

  // let network = "Binance Smart Chain Mainnet";
  // const provider = ethers.getDefaultProvider(network);
  // console.info(provider);
  // const address = "0x740aC5a1BbF57911d1F7743296ec29D5a1a8737E";

  // const balance1 = await provider.getBalance(account);
  // console.info("balance1:", balance1);
  // provider.getBalance(address).then((balanceofaccount) => {
  //   const balanceInEth = ethers.utils.formatEther(balanceofaccount);
  //   console.info(`balance: ${balanceInEth} ETH`);
  // });
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
              {/* Sed egestas quis commodo, faucibus commodo dictum dignissim nisl
              ac. Tincidunt cursus placerat lorem mi ac rhoncus eu. Id in
              integer risus, fames mi, luctus. */}
              {account}
              {/* {balanceInEth} */}
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
          </Col>
        </Row>
      </section>
      <hr style={{ borderColor: "#f1b90c" }} />
    </>
  );
};

export default Hero;
