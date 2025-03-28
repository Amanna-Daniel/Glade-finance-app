import React from "react";
import Navbar from "./components/Navbar.jsx";
import Card1 from "./components/Card1.jsx";
import Intro from "./components/Intro.jsx";
import Marquee from "./components/Marquee.jsx";
import CardB from "./components/CardB.jsx";
import CardC from "./components/CardC.jsx";
import Card2 from "./components/Card2.jsx";
import Card3 from "./components/Card3.jsx";
import Card4 from "./components/Card4.jsx";
import Card5 from "./Card5.jsx";
import Card6 from "./Card6.jsx";
import Card7 from "./components/Card7.jsx";
import Testimony from "./components/Testimony.jsx";
import OpenAccount from "./components/openAccount.jsx";
import Footer from "./components/Footer.jsx";
import "./Business.css";

const Business = () => {
  return (
    <div className="business-container">
      <Navbar />
      <Intro />
      <Marquee />
      <Card1 />
      <Card2 />
      <CardB />
      <Card3 />
      <Card4 />
      <CardC />
      <Card5 />
      <Card6 />
      <Card7 />
      <Testimony />
      <OpenAccount />
      <Footer />

      {/*        
      <div className="app-container">
        <Business />
      </div> */}
    </div>
  );
};

export default Business;
