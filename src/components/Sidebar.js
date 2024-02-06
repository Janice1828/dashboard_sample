import React from "react";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import { IoCard } from "react-icons/io5";
import { FaWrench } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { IoIosRocket } from "react-icons/io";
import logo from "../img/Untitled.png";
const Sidebar = () => {
  const style = {
    iconStyle: {
      background: "#fff",
      color: "#000",
      borderRadius: "7px",
      padding: "5px",
      height: "25px",
      width: "25px",
    },
    spanStyle: {
      fontWeight: "700",
    },
    logoStyle: {
      // height: "40px",
      width: "100%",
    },
  };
  return (
    <div className="h-100">
      <ul className="list-group d-flex flex-direction gap-2 pt-3 pb-5">
        <li className="list-group-item border-0 bg-sidebar-color text-light">
          <img src={logo} alt="Logo" style={style.logoStyle} />
        </li>
        <li className="list-group-item bg-sidebar-color h-100 border-0">
          <NavLink
            to="/"
            className="d-flex justify-content-between align-items-center"
          >
            <span style={style.spanStyle}>Dashboard</span>
            <IoHome style={style.iconStyle} />
          </NavLink>
        </li>
        <li className="list-group-item bg-sidebar-color border-0">
          <NavLink
            to="/tables"
            className="d-flex justify-content-between align-items-center"
          >
            <span style={style.spanStyle}>Tables</span>
            <IoStatsChart style={style.iconStyle} />
          </NavLink>
        </li>
        <li className="list-group-item bg-sidebar-color border-0">
          <NavLink
            to="/billing"
            className="d-flex justify-content-between align-items-center"
          >
            <span style={style.spanStyle}> Billing</span>
            <IoCard style={style.iconStyle} />
          </NavLink>
        </li>
        <li className="list-group-item bg-sidebar-color text-light border-0">
          <h5 className="font-italic fw-bolder">Account Pages</h5>
        </li>
        <li className="list-group-item bg-sidebar-color border-0">
          <NavLink
            to="/profile "
            className="d-flex justify-content-between align-items-center"
          >
            <span style={style.spanStyle}>Profile</span>
            <FaUser style={style.iconStyle} />
          </NavLink>
        </li>
        <li className="list-group-item bg-sidebar-color border-0">
          <NavLink
            to="/signin"
            className="d-flex justify-content-between align-items-center"
          >
            <span style={style.spanStyle}> Sign in</span>
            <IoIosDocument style={style.iconStyle} />
          </NavLink>
        </li>
        <li className="list-group-item bg-sidebar-color border-0 pb-5">
          <NavLink
            to="/signup"
            className="d-flex justify-content-between align-items-center"
          >
            <span style={style.spanStyle}>Sign up</span>
            <IoIosRocket style={style.iconStyle} />{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
