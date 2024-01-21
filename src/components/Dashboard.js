import React from "react";
import Navbar from "./Navbar";
import { IoWallet } from "react-icons/io5";
import { IoIosDocument } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
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
  };
  return (
    <div className="ps-5">
      <Navbar />
      <div className="pt-5">
        <div className="row">
          <div className="col-3">
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
          <div className="col-3">
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
          <div className="col-3">
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
          <div className="col-3">
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
                <p>Welcoma back,</p>
                <h4>Mark Johnson</h4>
                <p>Glad to see you again!</p>
                <p>Ask me anything.</p>
                <button type="">Tab to record</button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <h5>Satisfaction Rate</h5>
            <p>From all Projects</p>
            <div>
              <div>0%</div>
              <div>
                <h5>95%</h5>
                <span>Based on likes</span>
              </div>
              <div>100%</div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-between">
              <h5>Referral Tracking</h5>
              <span>Three dot icon</span>
            </div>
            <div className="d-flex">
              <div>
                <div>
                  <p>Invited</p>
                  <h5>145 People</h5>
                </div>
                <div>
                  <p>Bonus</p>
                  <h5>1,465</h5>
                </div>
              </div>
              <div>
                <p>Safety</p>
                <h3>9.3</h3>
                <p>Total Score</p>
              </div>
            </div>
          </div>
          {/* for charts these two columns */}
          {/* <div className="col-7">f</div>
          <div className="col-5">f</div> */}
          <div className="col-8">
            <h5>Projects</h5>
            <p>30 done this month.</p>
            <table className="table">
              <thead>
                <tr>
                  <th>COMPANIES</th>
                  <th>MEMBERS</th>
                  <th>BUDGET</th>
                  <th>COMPLETION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chakra Soft UI Version</td>
                  <td>5</td>
                  <td>$14,000</td>
                  <td>60%</td>
                </tr>
                <tr>
                  <td>Add Progress Track</td>
                  <td>5</td>
                  <td>$3,000</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Fix Platform Errors</td>
                  <td>5</td>
                  <td>$14,000</td>
                  <td>60%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <div>
              <h4>Orders overview</h4>
              <p>+30% this month</p>
            </div>
            <div>
              <h5>$2400, Design Changes</h5>
              <p>22 DEC 7:20 PM</p>
            </div>
            <div>
              <h5>New Order #4219423</h5>
              <p>21 DEC 11:21 PM</p>
            </div>
            <div>
              <h5>Server Payments for April</h5>
              <p>21 DEC 9:28 PM</p>
            </div>
            <div>
              <h5>New card added for order #3210145</h5>
              <p>20 DEC 3:52 PM</p>
            </div>
            <div>
              <h5>Unlock Packages for Development</h5>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
