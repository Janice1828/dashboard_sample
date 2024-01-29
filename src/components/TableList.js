import React from "react";
import Navbar from "./Navbar";
import { SlOptionsVertical } from "react-icons/sl";

const TableList = () => {
  return (
    <div className="ps-5">
      <Navbar header="Tables" />
      <div className="pt-5">
        <div className="row gy-3">
          <div className="col-12 card bg-sidebar-color border-0 text-light">
            <div className="card-body">
              <h5>Authors Table</h5>
              <table className="table t_test">
                <thead>
                  <tr>
                    <th>AUTHOR</th>
                    <th>FUNCTION</th>
                    <th>STATUS</th>
                    <th>EMPLOYED</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Esthera Jackson</td>
                    <td>Organization</td>
                    <td>
                      <button className="btn btn-success">Online</button>
                    </td>
                    <td>14/04/21</td>
                    <td>Edit</td>
                  </tr>
                  <tr>
                    <td>John Doe</td>
                    <td>Developer</td>
                    <td>
                      <button className="btn btn-outline-light">Offline</button>
                    </td>
                    <td>12/3/23</td>
                    <td>Edit</td>
                  </tr>
                  <tr>
                    <td>Joena Doe</td>
                    <td>Project Executive</td>
                    <td>
                      <button type="" className="btn btn-success">
                        Online
                      </button>
                    </td>
                    <td>3/3/22</td>
                    <td>Edit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 card bg-sidebar-color border-0 text-light">
            <div className="card-body">
              <div>
                <h5 className="fw-bold">Projects Table</h5>
                <p>
                  <span className="fw-bold">+30</span>&nbsp; this month
                </p>
              </div>
              <table className="table t_test">
                <thead>
                  <tr>
                    <th>COMPANIES</th>
                    <th>BUDGET</th>
                    <th>STATUS</th>
                    <th>COMPLETION</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Vision Ui Design</td>
                    <td>$14,000</td>
                    <td>Working</td>
                    <td>60%</td>
                    <td>
                      <button
                        type=""
                        className="ouline-none border-0 bg-transparent text-light"
                      >
                        <SlOptionsVertical />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Add Progress Track</td>
                    <td>$30000</td>
                    <td>Canceled</td>
                    <td>10%</td>
                    <td>
                      <button
                        type=""
                        className="ouline-none border-0 bg-transparent text-light"
                      >
                        <SlOptionsVertical />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Fix Platform errors</td>
                    <td>Not Set</td>
                    <td>Done</td>
                    <td>100%</td>
                    <td>
                      <button
                        type=""
                        className="ouline-none border-0 bg-transparent text-light"
                      >
                        <SlOptionsVertical />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableList;
