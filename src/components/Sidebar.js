import React from "react";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import { IoCard } from "react-icons/io5";
import { FaWrench } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { IoIosRocket } from "react-icons/io";
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
  };
  return (
    <div className="">
      <ul className="list-group d-flex flex-direction gap-2 pt-3 pb-5">
        <li className="list-group-item border-0 bg-sidebar-color text-light">
          <h6 className="font-italic">Vision Ui Free</h6>
        </li>
        <li className="list-group-item bg-sidebar-color border-0">
          <NavLink to="/" className="d-flex gap-2 align-items-center">
            <IoHome style={style.iconStyle} />
            <span style={style.spanStyle}>Dashboard</span>
          </NavLink>
        </li>
        <li className="list-group-item bg-sidebar-color border-0">
          <NavLink to="/tables" className="d-flex gap-2 align-items-center">
            <IoStatsChart style={style.iconStyle} />{" "}
            <span style={style.spanStyle}>Tables</span>
          </NavLink>
        </li>
        <li className="list-group-item bg-sidebar-color border-0">
          <NavLink to="/billing" className="d-flex gap-2 align-items-center">
            <IoCard style={style.iconStyle} />
            <span style={style.spanStyle}> Billing</span>
          </NavLink>
        </li>
        <li className="list-group-item bg-sidebar-color text-light border-0">
          <h6 className="font-italic">Account Pages</h6>
        </li>
        <li className="list-group-item bg-sidebar-color border-0">
          <NavLink to="/profile " className="d-flex gap-2 align-items-center">
            <FaUser style={style.iconStyle} />{" "}
            <span style={style.spanStyle}>Profile</span>
          </NavLink>
        </li>
        <li className="list-group-item bg-sidebar-color border-0">
          <NavLink to="/signin" className="d-flex gap-2 align-items-center">
            <IoIosDocument style={style.iconStyle} />
            <span style={style.spanStyle}> Sign in</span>
          </NavLink>
        </li>
        <li className="list-group-item bg-sidebar-color border-0">
          <NavLink to="/signup" className="d-flex gap-2 align-items-center">
            <IoIosRocket style={style.iconStyle} />{" "}
            <span style={style.spanStyle}>Sign up</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
