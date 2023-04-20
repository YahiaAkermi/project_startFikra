import React from "react";
import Navbar from "./UpperPageComponents/Navbar";
import HeroText from "./UpperPageComponents/HeroText";
import MediaSection from "./UpperPageComponents/MediaSection";
import MidFooter from "./UpperPageComponents/MidFooter";
import BienvenueSection from "./MiddlePageComponents/BienvenueSection";
import InnovationSection from "./MiddlePageComponents/InnovationSection";
import NosServiceSection from "./MiddlePageComponents/NosServiceSection";
import Footer from "./BottomPageSection/Footer";

export default function App(){
    return(
        <>
           
          <Navbar/>
          <HeroText/>
            <button>Commencer</button>
          <MediaSection/> 
          <MidFooter/>
          <BienvenueSection/>
          <InnovationSection/>
          <NosServiceSection/>
          <Footer/>

        </>
    )
}