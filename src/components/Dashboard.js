import React from "react";
import Navbar from "./Navbar";
import { IoWallet } from "react-icons/io5";
import { IoIosDocument } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import { FaCircleChevronRight } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { LuPackage } from "react-icons/lu";
import { FaIdCard } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
const Dashboard = () => {
  const style = {
    icon: {
      height: "45px",
      width: "45px",
      padding: "10px",
      color: "#fff",
      borderRadius: "9px",
      background: "#582cff",
    },
    table: {
      background: "transparent",
      color: "#fff",
      paddingBottom: "44px",
    },
    ordersIcon: {
      width: "22px",
      height: "22px",
      marginRight: "5px",
    },
  };
  return (
    <div className="ps-xl-5">
      <div className="d-none d-lg-block">
        <Navbar header="Dashboard" />
      </div>
      <div className="pt-3">
        <div className="row gy-3">
          <div className="col-lg-3 col-6">
            <div className="card rounded-4 bg-sidebar-color text-light">
              <div className="card-body ">
                <p className="card-text d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="fw-bold" style={{ color: "#6a748b" }}>
                      Today's Money
                    </h6>
                    <h5 className="fw-bold">
                      $53,000
                      <span className="fs-6" style={{ color: "#348060" }}>
                        +55%
                      </span>
                    </h5>
                  </div>
                  <div>
                    <IoWallet style={style.icon} />
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="card rounded-4 bg-sidebar-color text-light">
              <div className="card-body ">
                <p className="card-text d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="fw-bold" style={{ color: "#6a748b" }}>
                      Today's Users
                    </h6>
                    <h5 className="fw-bold">
                      2,300
                      <span className="fs-6" style={{ color: "#348060" }}>
                        +5%
                      </span>
                    </h5>
                  </div>
                  <div>
                    <BsGlobe2 style={style.icon} />
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="card rounded-4 bg-sidebar-color text-light">
              <div className="card-body ">
                <p className="card-text d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="fw-bold" style={{ color: "#6a748b" }}>
                      New Clients
                    </h6>
                    <h5 className="fw-bold">
                      +3,020
                      <span className="fs-6" style={{ color: "#348060" }}>
                        -14%
                      </span>
                    </h5>
                  </div>
                  <div>
                    <IoIosDocument style={style.icon} />
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="card rounded-4 bg-sidebar-color text-light">
              <div className="card-body ">
                <p className="card-text d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="fw-bold" style={{ color: "#6a748b" }}>
                      Total Sales
                    </h6>
                    <h5 className="fw-bold">
                      $173,000
                      <span className="fs-6" style={{ color: "#348060" }}>
                        +8%
                      </span>
                    </h5>
                  </div>
                  <div>
                    <FaCartShopping style={style.icon} />
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card rounded-4 bg-sidebar-color text-light">
              <div className="card-body">
                <span style={{ color: "#6a748b" }} className="fw-bold">
                  Welcome back,
                </span>
                <h3 className="mt-1 mb-3 fw-bolder">Mark Johnson</h3>
                <div
                  className="d-flex flex-column mt-1 mb-2"
                  style={{ color: "#6a748b" }}
                >
                  <h6 className="mb-0">Glad to see you again!</h6>
                  <h6>Ask me anything.</h6>
                </div>
                <button
                  type=""
                  style={{
                    background: "transparent",
                    border: "0",
                    outline: "0",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  Tab to record{" "}
                  <FaArrowRight
                    style={{ color: "#6a748b", marginLeft: "10px" }}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card rounded-4 bg-sidebar-color text-light">
              <div className="card-body">
                <h5 className="fw-bold">Satisfaction Rate</h5>
                <p className="reg-color">From all Projects</p>
                <div className="d-flex gap-5 justify-content-center mt-5 mb-3 body-color w-75 rounded-3 m-auto px-3 py-4">
                  <h5 className="reg-color">0%</h5>
                  <div className="border p-2 rounded-circle px-4 py-5">
                    <h4 className="text-center fw-bolder">95%</h4>
                    <h6>Based on likes</h6>
                  </div>
                  <div>100%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card rounded-4 bg-sidebar-color text-light p-4">
              <div className="card-body">
                <div className="d-flex justify-content-between mb-5">
                  <h5 className="fw-bold">Referral Tracking</h5>
                  <span>
                    <button
                      type=""
                      style={{
                        background: "transparent",
                        outline: "none",
                        border: "none",
                        color: "#fff",
                      }}
                    >
                      <SlOptions />
                    </button>
                  </span>
                </div>
                <div className="d-flex gap-5 align-items-center">
                  <div className="d-flex flex-column gap-5">
                    <div className="body-color px-5 py-2 rounded-4 d-flex flex-column align-items-center">
                      <span className="text-center reg-color mb-1 d-block">
                        Invited
                      </span>
                      <h6>145 People</h6>
                    </div>
                    <div className="body-color text-center py-2 rounded-4">
                      <span className="reg-color mb-1 d-block">Bonus</span>
                      <h5>1,465</h5>
                    </div>
                  </div>
                  <div className="border rounded-circle px-5 py-4">
                    <h6 className="reg-color">Safety</h6>
                    <h1 className="fw-bolder">9.3</h1>
                    <h6 className="reg-color">Total Score</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* for charts these two columns */}
          {/* <div className="col-7">f</div>
          <div className="col-5">f</div> */}
          <div className="col-lg-8 col-12">
            <div className="card rounded-4 bg-sidebar-color text-light">
              <div className="card-body">
                <h5 className="fw-bold">Projects</h5>
                <p className="reg-color">30 done this month.</p>
                <table className="table bg-transparent ">
                  <thead>
                    <tr>
                      <th style={style.table}>COMPANIES</th>
                      <th style={style.table}>MEMBERS</th>
                      <th style={style.table}>BUDGET</th>
                      <th style={style.table}>COMPLETION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={style.table}>Chakra Soft UI Version</td>
                      <td style={style.table}>5</td>
                      <td style={style.table}>$14,000</td>
                      <td style={style.table}>60%</td>
                    </tr>
                    <tr>
                      <td style={style.table}>Add Progress Track</td>
                      <td style={style.table}>5</td>
                      <td style={style.table}>$3,000</td>
                      <td style={style.table}>10%</td>
                    </tr>
                    <tr>
                      <td style={style.table}>Fix Platform Errors</td>
                      <td style={style.table}>5</td>
                      <td style={style.table}>$14,000</td>
                      <td style={style.table}>60%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="card rounded-4 bg-sidebar-color text-light">
              <div className="card-body">
                <div>
                  <h5 className="fw-bolder">Orders overview</h5>
                  <p className="reg-color">
                    <span className="fw-bolder">
                      <FaHtml5
                        style={style.ordersIcon}
                        className="text-danger"
                      />
                      +30%
                    </span>
                    this month
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <FaCircleChevronRight
                      style={style.ordersIcon}
                      className="text-success"
                    />
                  </div>
                  <div>
                    <p className="mb-0">$2400, Design Changes</p>
                    <span className="reg-color">22 DEC 7:20 PM</span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <IoMdNotifications
                      style={style.ordersIcon}
                      className="text-warning"
                    />
                  </div>
                  <div>
                    <p className="mt-1 mb-0">New Order #4219423</p>
                    <p className="reg-color">21 DEC 11:21 PM</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <FaCartShopping
                      style={style.ordersIcon}
                      className="text-light"
                    />
                  </div>
                  <div>
                    <p className="mb-0 mt-1">Server Payments for April</p>
                    <p className="reg-color">21 DEC 9:28 PM</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <FaIdCard
                      style={style.ordersIcon}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <p className="mb-0 mt-1">
                      New card added for order #3210145
                    </p>
                    <p className="reg-color">20 DEC 3:52 PM</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <LuPackage
                      style={style.ordersIcon}
                      className="text-secondary"
                    />
                  </div>
                  <div>
                    <p className="reg-color mb-0 mt-1">19 DEC 4:41 PM</p>
                    <p className="">Unlock Packages for Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
