import React, { Component, useState } from "react";
import { useWeb3React } from "@web3-react/core";

import logo from "../assets/img/logo.png";
import {
  FaAlignJustify,
  ImStarEmpty,
  ImStarFull,
  BsThreeDotsVertical,
} from "react-icons/all";
import { Link } from "react-router-dom";
import useAuth from "./../hooks/useAuth";

const Header = () => {
  const { account } = useWeb3React();
  const { login, logout } = useAuth();
  const [state, setState] = useState({ isOpen: false, star: true });

  // const

  const handleToggle = () => {
    setState({ isOpen: !this.state.isOpen });
  };

  const handleStar = () => {
    setState({ star: !this.state.star });
  };
  const accountElipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null;
  const walletConnect = () => {
    console.info("wallet", account);
    if (account) {
      logout();
    } else {
      login();
    }
  };

  return (
    <section className="header">
      <nav className="navbar">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{ height: "60px", maxHeight: "100%", marginTop: "-2px" }}
          ></img>
        </Link>
        <div className="nav-center">
          <ul className={state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/projects">IDO PROJECTS</Link>
            </li>
            <li>
              <Link to="/staking">STAKING</Link>
            </li>
            <li>
              <Link to="/vesting">VESTING</Link>
            </li>
            <li>
              <Link to="/applyido">APPLY FOR IDO</Link>
            </li>
            {account ? (
              <li
                onClick={walletConnect}
                className="connect-button"
              >
                {accountElipsis}
              </li>
            ) : (
              <li
                onClick={walletConnect}
                className="connect-button"
              >
                CONNECT
              </li>
            )}

            <li>
              <BsThreeDotsVertical
                onClick={handleToggle}
                size={30}
                style={{ marginLeft: 0, marginTop: "7px", cursor: "pointer" }}
              />
            </li>
          </ul>
          <ul className="nav-mobile">
            <li>
              <button type="button" className="nav-btn" onClick={handleToggle}>
                <FaAlignJustify className="nav-icon" />
              </button>
            </li>
            {
              <li>
                {state.star ? (
                  <button
                    type="button"
                    className="nav-btn"
                    onClick={handleStar}
                  >
                    <ImStarEmpty className="nav-icon" />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="nav-btn"
                    onClick={handleStar}
                  >
                    <ImStarFull className="nav-icon" />
                  </button>
                )}
              </li>
            }
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Header;
