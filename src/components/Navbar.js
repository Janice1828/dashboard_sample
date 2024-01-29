import React from "react";
import { IoMdSettings } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
const Navbar = (props) => {
  const style = {
    input: {
      borderRadius: "10px",
      border: "1px solid #fff",
      padding: "5px 0px 5px 35px ",
      color: "#fff",
      background: "transparent",
    },
    iconStyle: {
      height: "18px",
      width: "18px",
    },
    form: {
      position: "relative",
    },
    button: {
      position: "absolute",
      background: " transparent",
      color: "#fff",
      border: "none",
      top: "5px",
      right: "190px",
    },
  };

  const [search, setSearch] = useState("");
  return (
    <div className="d-flex justify-content-between bg-red">
      <div>
        <div>
          Pages / <span className="fw-bold">{props.header}</span>
        </div>
        <div className="fw-bold">{props.header}</div>
      </div>
      <div className="d-flex gap-3 align-items-center">
        <form style={style.form}>
          <input
            type=""
            name=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="     Type here..."
            className="navbarInput"
            style={style.input}
          />
          <button type="" style={style.button}>
            <IoSearch />
          </button>
        </form>
        <div className="d-flex gap-2 align-items-center">
          <FaUser style={style.iconStyle} />
          <span className="fw-bolder">Sign In</span>
        </div>
        <div>
          <IoMdSettings style={style.iconStyle} />
        </div>
        <div>
          <IoNotifications style={style.iconStyle} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
