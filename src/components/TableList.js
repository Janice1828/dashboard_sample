import React from "react";
import Navbar from "./Navbar";
import { SlOptionsVertical } from "react-icons/sl";
import img_a from "../img/company_a.jpg";
import img_d from "../img/company_d.jpg";
import img_e from "../img/company_e.jpg";
import { BsArrowRightCircleFill } from "react-icons/bs";
import table_img_a from "../img/table_img_a.jpg";
import table_img_b from "../img/table_img_b.jpg";
import table_img_c from "../img/table_img_c.jpg";
const TableList = () => {
  return (
    <div className="ps-5">
      <Navbar header="Tables" />
      <div className="pt-0">
        <div className="row gy-3 w-100 m-auto">
          <div className="col-12 card bg-sidebar-color border-0 text-light">
            <div className="card-body">
              <h5 className="fw-bolder">Authors Table</h5>
              <table className="table t_test p-0">
                <thead>
                  <tr>
                    <td>AUTHOR</td>
                    <td>FUNCTION</td>
                    <td>STATUS</td>
                    <td>EMPLOYED</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="d-flex gap-2 align-items-center">
                      <img
                        src={table_img_a}
                        alt=""
                        width="40px"
                        className="rounded-2"
                      />
                      <span>Esthera Jackson</span>
                    </td>
                    <td>Organization</td>
                    <td>
                      <button className="btn btn-success">Online</button>
                    </td>
                    <td>14/04/21</td>
                    <td>
                      <button className="btn btn-outline-secondary">
                        Edit
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="d-flex gap-2 align-items-center">
                      <img
                        src={table_img_b}
                        alt=""
                        width="40px"
                        className="rounded-2"
                      />
                      <span>Joena Doe</span>
                    </td>
                    <td>Developer</td>
                    <td>
                      <button className="btn btn-outline-light">Offline</button>
                    </td>
                    <td>12/3/23</td>
                    <td>
                      <button className="btn btn-outline-secondary">
                        Edit
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="d-flex gap-2 align-items-center">
                      <img
                        src={table_img_c}
                        alt=""
                        width="40px"
                        className="rounded-2"
                      />
                      <span>Lily Smith</span>
                    </td>

                    <td>Project Executive</td>
                    <td>
                      <button type="" className="btn btn-success">
                        Online
                      </button>
                    </td>
                    <td>3/3/22</td>
                    <td>
                      <button className="btn btn-outline-secondary">
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 card bg-sidebar-color border-0 text-light">
            <div className="card-body">
              <div>
                <h5 className="fw-bold">Projects Table</h5>
                <div className="d-flex gap-2">
                  <BsArrowRightCircleFill
                    className="text-success"
                    style={{ height: "25px" }}
                  />
                  <p>
                    <span className="fw-bold">+30</span>&nbsp; this month
                  </p>
                </div>
              </div>
              <table className="table t_test">
                <thead>
                  <tr>
                    <td>COMPANIES</td>
                    <td>BUDGET</td>
                    <td>STATUS</td>
                    <td>COMPLETION</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="d-flex gap-3">
                      <img width="30px" src={img_a} alt="" />
                      <span>Vision Ui Design</span>
                    </td>
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
                    <td className="d-flex gap-3">
                      <img width="30px" src={img_d} alt="" />
                      <span> Add Progress Track</span>
                    </td>
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
                    <td className="d-flex gap-3">
                      <img width="30px" src={img_e} alt="" />
                      <span> Fix Platform errors</span>
                    </td>
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
