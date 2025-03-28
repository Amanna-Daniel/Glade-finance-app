import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import gladeLogo from "../assets/glade-white-logo.svg";
import down_arrow from "../assets/angle-small-down.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

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
    <nav className="navbar">
      <img src={gladeLogo}></img>
      <div className="mode">
        <button className="left-button" onClick={() => navigate("/")}>
          Business
        </button>
        <button
          className="right-button"
          onClick={() => navigate("/entrepreneur")}
        >
          Entrepreneur
        </button>
      </div>
      <div className="login">
        <button style={{ backgroundColor: "#292929", color: "white" }}>
          Login
        </button>
        <button
          id="get-started"
          style={{ backgroundColor: "#2c6dea", color: "white", width: "auto" }}
        >
          Get Started{" "}
        </button>

        <div className="dropdown-container" ref={dropdownRef}>
          <span className="hamburger" onClick={toggleMenu}>
            ☰
            {/* <line x1={3} y1={12} x2={21} y2={12}></line>
            <line x1={3} y1={6} x2={21} y2={6}></line>
            <line x1={3} y1={18} x2={21} y2={18}></line> */}
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
                  Resources <img src={down_arrow} />
                </a>
                <ul
                  className={`dropbtn-content ${
                    activeDropdown === "resources" ? "show" : ""
                  }`}
                >
                  <li>
                    <a href="#">blog</a>
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
                    <a>About</a>
                  </li>
                  <li>
                    <a>Brand</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
