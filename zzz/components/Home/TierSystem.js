import React, { Component } from 'react';

import RoundCard from './RoundCard';

import { rounds } from '../../assets/variables';

export default class TierSystem extends Component {
    render() {
        return (
            <section className="container round">
                <h3 className="col-12 text-center font-weight-bold round-title">TIER SYSTEM</h3>

                <section className="projects">
                    {rounds.map((round, index) => { return <RoundCard key={index} round={round} /> })}
                </section>
            </section>
        );
    }
}
