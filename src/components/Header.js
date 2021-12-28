import React, { Component, useState } from "react";
import { useWeb3React } from "@web3-react/core";

import { useModal } from "../contexts/modalContext";
import config from "../contexts/modalConfig";
import metamask from "../components/icons/metamask.svg";

import logo from "../assets/img/logo.png";
import { BsThreeDotsVertical } from "react-icons/all";
import { Link } from "react-router-dom";
import useAuth from "./../hooks/useAuth";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";
import { connectorLocalStorageKey } from "../config";

const Header = () => {
  const { account } = useWeb3React();
  const { login, logout } = useAuth();

  const [state, setState] = useState({
    right: false,
    isOpen: false,
  });

  const { setModalTitle, setModalBody, unSetModal } = useModal();

  const accountElipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null;
  const walletConnect = () => {
    if (account) {
      unSetModal();
      logout();
      window.localStorage.removeItem(connectorLocalStorageKey);
    } else {
      unSetModal();
      login();
      window.localStorage.setItem(connectorLocalStorageKey, "injected");
    }
  };

  const toggleDrawer = (anchor, open) => (event) => {
    console.info(anchor, open, event);
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, right: open });
  };

  const WalletButtons = () => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {config.map((entry, index) => (
          <Button
            key={entry.title}
            onClick={walletConnect}
            style={{ justifyContent: "space-around" }}
          >
            <img src={metamask} alt="meta" style={{ width: "60px" }} />
            {entry.title}
          </Button>
        ))}
      </div>
    );
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 400, backgroundColor: "transparent", borderRadius: "10px" }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <CloseIcon fontSize="large" style={{ cursor: "pointer" }} />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const styles = {
    backgroundColor: "transparent",
  };

  return (
    <section className="header">
      <nav className="navbar">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{ height: "100%", maxHeight: "50px" }}
          ></img>
        </Link>
        <div className="nav-center">
          <ul className="nav-links">
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
                onClick={() => {
                  setModalTitle("Logout");
                  setModalBody(
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                      }}
                    >
                      <h4>{account}</h4>
                      <Button onClick={walletConnect}>Logout</Button>
                    </div>
                  );
                }}
                className="connect-button"
              >
                {accountElipsis}
              </li>
            ) : (
              <li
                onClick={() => {
                  setModalTitle("Connect Wallet");
                  setModalBody(<WalletButtons />);
                }}
                className="connect-button"
              >
                CONNECT
              </li>
            )}

            <li
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <BsThreeDotsVertical
                onClick={toggleDrawer("right", true)}
                size={30}
                style={{ marginLeft: 0, marginTop: "7px", cursor: "pointer" }}
              />
            </li>
          </ul>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h1 id="offcanvasRightLabel">IDO</h1>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-lg-0">
          <ul className="navbar-nav">
            <li>
              <Link to="/projects">
                IDO PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/staking">STAKING</Link>
            </li>
            <li>
              <Link to="/vesting">VESTING</Link>
            </li>
            <li>
              <Link to="/applyido">APPLY IDO</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
