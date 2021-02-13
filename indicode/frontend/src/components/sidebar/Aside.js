import React from "react";
import { Link } from "react-router-dom";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";

const Aside = ({ collapsed, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      image={false}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            // textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 24,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          IndiCode
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">New</span>}
          >
            Home
          </MenuItem>
          <MenuItem icon={<FaGem />}>
            {" "}
            Learning<Link to="/learning"></Link>
          </MenuItem>
          <MenuItem icon={<FaRegLaughWink />}>
            {" "}
            Explore<Link to="/explore"></Link>
          </MenuItem>
          <MenuItem icon={<FaHeart />}> FAQ</MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/cianmorrin"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <span>@Cian_Morrin</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
