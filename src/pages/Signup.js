import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Img from "../img/peakpx.jpg";
import { IoLogoApple } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { IoIosDocument } from "react-icons/io";
import { FaRocket } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const style = {
    fontStyle: {
      height: "40px",
      width: "40px",
      border: "1px solid #fff",
      padding: "7px",
      borderRadius: "10px",
    },
  };
  return (
    <div>
      <div
        className="nav-bg position-fixed px-3 py-4 rounded-4 bg-sidebar-color w-75 m-auto text-center d-flex justify-content-between align-items-center
        "
        style={{
          top: "50px",
          left: "14%",
          color: "#fff",

          zIndex: "1000",
        }}
      >
        <div>Vision Ui Free</div>
        <div className="d-flex gap-4">
          <span className="d-flex align-items-center gap-2">
            <IoHomeSharp />
            <Link to="/">Dashboard</Link>
          </span>
          <span className="d-flex align-items-center gap-2">
            <FaUser />
            <NavLink to="/profile"> Profile</NavLink>
          </span>
          <span className="d-flex align-items-center gap-2">
            <FaRocket />
            <NavLink to="/signup"> Sign Up</NavLink>
          </span>
          <span className="d-flex align-items-center gap-2">
            <IoIosDocument />
            <NavLink to="/signin"> Sign In</NavLink>
          </span>
        </div>
        <div>
          <button type="" className="btn signup-btn-color">
            Free Download
          </button>
        </div>
      </div>
      <div className="row gx-0 gy-0 position-relative">
        <div className="col-6 position-relative">
          <img
            src={Img}
            alt="Image"
            className="w-100 h-100"
            style={{ filter: "brightness(55%)" }}
          />
          <div
            className="position-absolute"
            style={{ top: "50%", left: "22%", color: "#fff" }}
          >
            <h5 className="text-center fw-bolder">INSPIRED BY THE FUTURE :</h5>
            <h2 className="fw-bolder">THE VISION UI DASHBOARD</h2>
          </div>
        </div>
        <div className="col-6 row gx-0 gap-3 pt-5 pb-5 align-items-center bg-sidebar-color text-light">
          <div className="col-12 mb-0 pt-5 mt-5 text-center">
            <div className="pt-5">
              <h2 className="fw-bolder mb-0">Welcome</h2>
            </div>
          </div>
          <div className="col-12 mt-0 text-center">
            Use this awesome forms to login or create new <br />
            account in your project for free.
          </div>
          <div className="col-12 w-50 m-auto">
            <div className="card bg-transparent text-light">
              <div className="card-body">
                <div>
                  <h5 className="text-center mb-1 fw-bold">Register With</h5>
                  <div className="d-flex gap-1 justify-content-center mt-1 mb-3">
                    <Link to="/">
                      <FaFacebook style={style.fontStyle} />
                    </Link>
                    <Link to="/">
                      <IoLogoApple style={style.fontStyle} />
                    </Link>
                    <Link to="/">
                      <FaGoogle style={style.fontStyle} />
                    </Link>
                  </div>
                  <form
                    className="w-100 m-auto d-flex flex-column gap-3"
                    id="signUp"
                  >
                    <div>
                      <label for="" className="mb-2">
                        Name
                      </label>

                      <input
                        type=""
                        name=""
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label for="" className="mb-2">
                        Email
                      </label>
                      <input
                        type=""
                        name=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email Address"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <label for="" className="mb-2">
                        Password
                      </label>
                      <input
                        type=""
                        name=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Your Password"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked"
                        />
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckChecked"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div>
                      <button type="" className="btn signup-btn-color w-100">
                        SIGN UP
                      </button>
                    </div>
                    <div>
                      Already have an account?
                      <button
                        className=""
                        type=""
                        style={{
                          background: "none",
                          border: "0",
                          outline: "0",
                          color: "#fff",
                        }}
                      >
                        &nbsp; Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            &copy; 2024, Made with love by Simmmple & Simmmple for a better web
          </div>
          <div className="col-12 d-flex justify-content-center gap-3">
            <div>Simmmple</div>
            <div>Simmmple</div>
            <div>Blog</div>
            <div>License</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
