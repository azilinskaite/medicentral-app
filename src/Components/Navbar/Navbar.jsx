import React from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import MedicentralLogoNav from "../../Assets/MedicentralLogoNav.svg";
import MedicentralLogoS from "../../Assets/MedicentalLogoS.png";
import BurgerIcon from "../../Assets/Burger-icon.png";

function Navbar({ showNavRight = true, toggleDashboard }) {
  return (
    <header className="header">
      <div className="navbar-left">
        {/* button manages the state od the dashboard */}
      <button className="burger-menu" onClick={toggleDashboard}>
        <img src={BurgerIcon} alt="Menu" />
      </button>
      <Link to="/" className="navbar-logo">
        <img src={MedicentralLogoNav} alt="Medicentral Logo" />{" "}
      </Link>
      </div>
      {showNavRight && (
        <nav className="navbar-right">
          <ul>
            <li>
              <NavLink
                to="/homepage"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className="nav-link">
                PROFILE
              </NavLink>
            </li>
            <li>
              <button className="log-out-btn">LOG OUT</button>
            </li>
            <li><img src={MedicentralLogoS} alt="Medicentral logo" className="small-logo"/></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
