import React, { Component } from 'react';

import logo from '../assets/img/logo.png';
import { FaAlignJustify, ImStarEmpty, ImStarFull, BsThreeDotsVertical } from 'react-icons/all';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {
        isOpen: false,
        star: true,
    };

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    };

    handleStar = () => {
        this.setState({ star: !this.state.star })
    }

    render() {
        return (
            <section className="header">
                <nav className="navbar">
                    <Link to="/" >
                        <img src={logo} alt="logo" style={{height:'60px', maxHeight:'100%', marginTop:'-2px'}}></img>
                    </Link>
                    <div className="nav-center">
                        <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                            <li ><Link to="/projects">IDO PROJECTS</Link></li>
                            <li><Link to="/staking">STAKING</Link></li>
                            <li><Link to="/vesting">VESTING</Link></li>
                            <li><Link to="/applyido">APPLY FOR IDO</Link></li>
                            <li><Link to="/" style={{backgroundColor:'#f1b90c', color:'black',}} >CONNECT WALLET</Link></li>
                            <li><BsThreeDotsVertical onClick={this.handleToggle} size={30} style={{marginLeft:0, marginTop:'7px',cursor:'pointer'}}/></li>
                        </ul>
                        <ul className="nav-mobile">
                            <li>
                                <button type="button" className="nav-btn" onClick={this.handleToggle}><FaAlignJustify className="nav-icon" /></button>
                            </li>
                            {<li>{this.state.star ?
                                <button type="button" className="nav-btn" onClick={this.handleStar}>
                                    <ImStarEmpty className="nav-icon" />
                                </button>
                                : <button type="button" className="nav-btn" onClick={this.handleStar}>
                                    <ImStarFull className="nav-icon" />
                                </button>}
                            </li>}
                        </ul>
                    </div>
                </nav>
            </section>
        );
    }
}

export default Header;
