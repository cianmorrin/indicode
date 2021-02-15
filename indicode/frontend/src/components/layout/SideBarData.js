import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Learning",
    path: "/learning",
    icon: <BiIcons.BiBook />,
  },
  {
    title: "Explore",
    path: "/explore",
    icon: <FaIcons.FaWpexplorer />,
  },
  {
    title: "FAQ",
    path: "/faq",
    icon: <FaIcons.FaQuestion />,
  },
];
