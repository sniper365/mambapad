import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { stakings } from "../assets/variables";
import InformationCard from "../components/Staking/A_Information";

import Cards from "../components/Staking/A_Cards";
import Background from '../components/Background';


export default function Staking() {
  const [wizard, setWizard] = useState("stake");

  const selectWizard = (tab) => {
    console.log(tab);
    setWizard(tab);
  };

  return (
    <>
      <Header />
      <Background/>
      <InformationCard />
      <Cards />
      <Footer />
    </>
  );
}
