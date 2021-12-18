import React from "react";

const InformationCard = () => {
  return (
    <section className="container stake">
      <div className="stake-information-card" style={{width:'50%'}}>
        <section>
          <h5 className="text-left text-white">
            Withdrawal has a timelock of 168 hours (7 days)
          </h5>
          <p className="text-left">
            %3 on BUY and %6 on SELL will be rewarded to STAKERS as BNB
          </p>
          <p className="text-left" style={{marginBottom:0}}>
            Pending Reward has a timelock of 24 hours (1 day)
          </p>
        </section>
      </div>
    </section>
  );
};

export default InformationCard;
