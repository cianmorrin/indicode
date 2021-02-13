import React from "react";
import Switch from "react-switch";
import { FaHeart, FaBars } from "react-icons/fa";

const Main = ({ collapsed, handleToggleSidebar, handleCollapsedChange }) => {
  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <header>
        <h1>React Pro Sidebar</h1>
        <p>
          React sidebar library with dropdown menus and unlimited number of
          nested submenus
        </p>
      </header>
      <div className="block ">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleCollapsedChange}
          checked={collapsed}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span> Collapsed </span>
      </div>
    </main>
  );
};

export default Main;
