import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import { IconContext } from "react-icons";
import "../css/Navbar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <FaIcons.FaCode onClick={showSidebar} />
              </Link>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={sidebar ? "nav-text" : "nav-text active"}
                >
                  <Link to={item.path}>
                    <span className="icon">{item.icon}</span>
                    {sidebar ? (
                      <span className="linkText">{item.title}</span>
                    ) : (
                      ""
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
