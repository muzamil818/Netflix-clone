import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile from "../../assets/profile_img.png";
import dropdown from "../../assets/caret_icon.svg";
import { useEffect } from "react";
import { logOut } from "../../firebase";
const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 180) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);
  const [showSignOut, setShoSignOut] = useState(false);
  return (
    <div ref={navRef} className="navbar nav-dark">
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
        <ul className="links">
          <li>Home</li>
          <li>Tv Show</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My list</li>
          <li>Browse my Language</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="Logo" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="bellIcon" className="bellicon" />

        <div className="navbar-profile">
          <img src={profile} alt="profile" className="profile" />
          <img
            onClick={() => setShoSignOut((prev) => !prev)}
            src={dropdown}
            alt="dropdown"
            className="dropdownIcon"
          />
          {showSignOut && (
            <div onClick={() => {logOut()}} className="dropdown">
              Sign Out
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
