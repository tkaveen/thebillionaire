import React from "react";
import HeroSection from "../../../HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../Pricing";
import Herotwo from "../../Herotwo";
import NewTrends from "../../NewTrends";
import Herothree from "../../Herothree";
import Layout from "../../Layout/Layout";
import Navbar from "../../Navbar";

function Home() {
  return (
    <>
      {/* <Layout>
        <div style ={{marginTop:"75px"}}>HomePage</div>
      </Layout> */}
      {/* <Navbar></Navbar> */}
      {/* <Layout></Layout> */}
      <HeroSection {...homeObjOne} />
      <Pricing />
      <Herotwo></Herotwo>
      <NewTrends></NewTrends>
      <Herothree></Herothree>
      {/* <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />      
      <HeroSection {...homeObjFour} /> */}
    </>
  );
}

export default Home;
