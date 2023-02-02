import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    Icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    Icons: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    Icons: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    Icons: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    Icons: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    Icons: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
