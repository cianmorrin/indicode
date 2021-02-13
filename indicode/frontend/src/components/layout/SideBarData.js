import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Learning",
    path: "/learning",
    icon: <BiIcons.BiBook />,
    cName: "nav-text",
  },
  {
    title: "Explore",
    path: "/explore",
    icon: <FaIcons.FaWpexplorer />,
    cName: "nav-text",
  },
  {
    title: "FAQ",
    path: "/faq",
    icon: <FaIcons.FaQuestion />,
    cName: "nav-text",
  },
];
