import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul className="list-group d-flex flex-direction gap-3">
        <li className="list-group-item bg-danger border-0">
          <NavLink to="/"> Dashboard</NavLink>
        </li>
        <li className="list-group-item bg-danger border-0">
          <NavLink to="/tables"> Tables</NavLink>
        </li>
        <li className="list-group-item bg-danger border-0">
          <NavLink to="/billing"> Billing</NavLink>
        </li>
        <li className="list-group-item bg-danger border-0">
          <NavLink to="/rtl"> RTL</NavLink>
        </li>
        <li className="list-group-item bg-danger border-0">
          <h4>Account Pages</h4>
        </li>
        <li className="list-group-item bg-danger border-0">
          <NavLink to="/profile"> Profile</NavLink>
        </li>
        <li className="list-group-item bg-danger border-0">
          <NavLink to="/signin"> Sign in</NavLink>
        </li>
        <li className="list-group-item bg-danger border-0">
          <NavLink to="/signup"> Sign up</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
