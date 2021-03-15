import React, { Component } from "react";
import * as FaIcons from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { SideBarData } from "./SideBarData";
import { IconContext } from "react-icons";
import "../css/Navbar.css";
import { setSidebar } from "../../actions/sidebar";

export class Navbar extends Component {
  static propTypes = {
    sidebar: PropTypes.bool.isRequired,
    setSidebar: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <nav className={this.props.sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={this.props.setSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <FaIcons.FaCode onClick={this.props.setSidebar} />
                </Link>
              </li>
              {SideBarData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={
                      this.props.sidebar ? "nav-text" : "nav-text active"
                    }
                  >
                    <Link to={item.path}>
                      <span className="icon">{item.icon}</span>
                      {this.props.sidebar ? (
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
}

const mapStateToProps = (state) => ({
  sidebar: state.sidebar.sidebar,
});

export default connect(mapStateToProps, { setSidebar })(Navbar);
