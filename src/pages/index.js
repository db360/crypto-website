import React, {useState} from "react";
import HeroSection from "../components/HeroSection";
import '../App.css';

import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/InfoSection/Data";
import Services from "../components/Services/Index";
import Footer from "../components/Footer";

//Images


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }


  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services />
      <InfoSection {...homeObjThree}/>
      <Footer />

    </>
  );
};

export default Home;
