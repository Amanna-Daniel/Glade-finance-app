import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar2.css";
import down_arrow from "../assets/angle-small-down.svg";

const Navbar2 = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 10);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleHoverDrop = (menu) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleHoverLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <nav
      className={`navbar2 ${isScrolled ? "scrolled" : ""}`}
      style={{ background: "#eef4ff" }}
    >
      <h1 className="logo">
        <img
          src="https://gladefinance.co/images/glade-blue-logo.svg"
          alt="Glade Logo"
        />
      </h1>
      <div className="mode">
        <button className="left-button2" onClick={() => navigate("/")}>
          Business
        </button>
        <button
          className="right-button2"
          onClick={() => navigate("/entrepreneur")}
        >
          Entrepreneur
        </button>
      </div>
      <div className="login" ref={dropdownRef}>
        <button style={{ backgroundColor: "#292929", color: "white" }}>
          Login
        </button>
        <button
          id="get-started"
          style={{ backgroundColor: "#2c6dea", color: "white", width: "auto" }}
        >
          Get Started
        </button>
        <span className="hamburger" onClick={toggleMenu}>
          ☰
        </span>

        <ul className={`menu ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#" className="incorporation">
              Incorporation
            </a>
          </li>
          <li>
            <div
              className="hover-wrapper"
              onMouseOver={() => handleHoverDrop("resources")}
              onMouseLeave={handleHoverLeave}
            >
              <a href="#" className="resources">
                Resources <img src={down_arrow} alt="▼" />
              </a>
              <ul
                className={`dropbtn-content ${
                  activeDropdown === "resources" ? "show" : ""
                }`}
              >
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">API Documentation</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div
              onMouseOver={() => handleHoverDrop("company")}
              onMouseLeave={handleHoverLeave}
            >
              <a href="#" className="company">
                Company <img src={down_arrow} />{" "}
              </a>
              <ul
                className={`dropbtn-content ${
                  activeDropdown === "company" ? "show" : ""
                }`}
              >
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Brand</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;

// import { useNavigate } from "react-router-dom";
// import "./Navbar2.css";
// import gladeLogo from '../assets/glade-white-logo.svg';
// import { useEffect, useState } from "react";

// const Navbar2 = () => {
//   const navigate = useNavigate();
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () =>{

//      if (window.scrollY >= 10) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`navbar2 ${isScrolled ? "scrolled" : ""}`} style={{background: '#eef4ff'}}>

//         <h1 className="logo"><img src='https://gladefinance.co/images/glade-blue-logo.svg'></img></h1>
//         <div className="mode">
//           <button className="left-button2"  onClick={() => navigate("/")}>Business</button>
//           <button className="right-button2" onClick={() => navigate("Entrepreneur")}>Entrepreneur</button>
//         </div>
//         <div className="login">
//           <button style={{backgroundColor: '#292929', color:'white'}}>Login</button>
//           <button id="get-started" style={{backgroundColor: '#2c6dea', color:'white', width: 'auto'}}>Get Started  </button>
//           <span className="hamburger">☰</span>
//         </div>

//     </nav>
//   );
// };

// export default Navbar2;
