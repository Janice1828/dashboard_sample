import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { FaCircleArrowUp } from "react-icons/fa6";
import { PiWarningCircle } from "react-icons/pi";

import { FaCircleArrowDown } from "react-icons/fa6";

import { FaRegTrashCan } from "react-icons/fa6";

import Navbar from "./Navbar";
const BillingContent = () => {
  return (
    <div className="ps-5">
      <Navbar header="Dashboard" />
      <div className="pt-3">
        <div className="row gy-3">
          <div className="col-8">
            <div className="row g-3">
              <div className="col-6 ">
                <div className="card billing_color text-light p-3 rounded-3">
                  <div className="card-body">
                    <h5 className="pb-5">Vision UI</h5>
                    <h4 className="pb-3 pt-1">7812 2139 0823 xxxx</h4>
                    <div className="d-flex gap-5">
                      <div>
                        <p className="mb-0">VALID THRU</p>
                        <span className="fw-bolder">05/24</span>
                      </div>
                      <div>
                        <p className="mb-0">CVV</p>
                        <span>09x</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card bg-sidebar-color text-light">
                  <div className="card-body">
                    <div className="card bg-credit text-light">
                      <div className="card-body">
                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="fs-6">Credit Balance</p>
                            <button
                              type=""
                              className="bg-transparent border-0 outline-0 text-light"
                            >
                              <BsThreeDotsVertical />
                            </button>
                          </div>
                          <h2 className="fw-bolder">$25,215</h2>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="pt-4 d-inline-block">Newest</span>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                          <div>
                            <FaBuilding
                              style={{ height: "25px", width: "25px" }}
                            />
                          </div>
                          <div>
                            <p className="mb-0">Bill & Taxes</p>
                            <span>Today, 16:36</span>
                          </div>
                        </div>
                        <div className="fw-bolder">-$154.50</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card bg-sidebar-color text-light">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="fw-bolder">Payment Method</h5>
                      <button type="" className="btn btn-primary">
                        Add A New Card
                      </button>
                    </div>
                    <div
                      className="d-flex gap-2 mt-4 "
                      style={{ paddingBottom: "13px" }}
                    >
                      <div className="card w-100 billing_color text-light">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex gap-2 align-items-center">
                              <FaCcMastercard
                                className="text-light"
                                style={{ height: "20px", width: "20px" }}
                              />
                              <span> 7812 2139 0823 xxxx</span>
                            </div>
                            <button
                              type=""
                              className="border-0 outline-0 bg-transparent text-light"
                            >
                              <TiPencil></TiPencil>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="card w-100 billing_color text-light">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex gap-2 align-items-center">
                              <RiVisaLine
                                className="text-light"
                                style={{ height: "20px", width: "20px" }}
                              />
                              <span> 7812 2139 0823 xxxx</span>
                            </div>
                            <button
                              type=""
                              className="border-0 outline-0 bg-transparent text-light"
                            >
                              <TiPencil></TiPencil>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card bg-sidebar-color text-light">
              <div className="card-body row gy-4">
                <h5 className="fw-bolder col-7">Invoices</h5>
                <div className="col-5">
                  <button type="" className="btn btn-primary px-4 rounded-3">
                    View All
                  </button>
                </div>
                <div className="col-7">
                  <p className="mb-0">March, 01, 2020</p>
                  <span className="invoices_span ">#MS-415646</span>
                </div>
                <div className="col-5 d-flex gap-4 align-items-center">
                  <p className="reg-color">$180</p>
                  <p className="d-flex gap-2 align-items-center">
                    <FaFilePdf />
                    <span className="reg-color fw-bold">PDF</span>
                  </p>
                </div>
                <div className="col-7">
                  <p className="mb-0">February, 01, 2020</p>
                  <span className="invoices_span ">#RV-123454</span>
                </div>
                <div className="col-5 d-flex gap-4 align-items-center">
                  <p className="reg-color">$200</p>
                  <p className="d-flex gap-2 align-items-center">
                    <FaFilePdf />
                    <span className="reg-color fw-bold">PDF</span>
                  </p>
                </div>
                <div className="col-7">
                  <p className="mb-0">April, 9, 2020</p>
                  <span className="invoices_span ">#JK-2034</span>
                </div>
                <div className="col-5 d-flex gap-4 align-items-center">
                  <p className="reg-color">$130</p>
                  <p className="d-flex gap-2 align-items-center">
                    <FaFilePdf />
                    <span className="reg-color fw-bold">PDF</span>
                  </p>
                </div>
                <div className="col-7 ">
                  <p className="mb-0">January, 01, 2020</p>
                  <span className="invoices_span ">#JA-897</span>
                </div>
                <div className="col-5 d-flex gap-4 align-items-center">
                  <p className="reg-color">$900</p>
                  <p className="d-flex gap-2 align-items-center">
                    <FaFilePdf />
                    <span className="reg-color fw-bold">PDF</span>
                  </p>
                </div>
                <div className="col-7">
                  <p className="mb-0">February, 7, 2022</p>
                  <span className="invoices_span ">#FEB-123</span>
                </div>
                <div className="col-5 d-flex gap-4 align-items-center">
                  <p className="reg-color">$340</p>
                  <p className="d-flex gap-2 align-items-center">
                    <FaFilePdf />
                    <span className="reg-color fw-bold">PDF</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="card bg-sidebar-color text-light">
              <div className="card-body">
                <h5 className="mb-4">Billing Information</h5>
                <div className="d-flex flex-column gap-4">
                  <div className="card billing_color text-light">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <p>Oliver Liam</p>
                        <div className="d-flex gap-5">
                          <button
                            type=""
                            className="bg-transparent outline-0 border-0 text-danger"
                          >
                            Delete&nbsp; <FaRegTrashCan />
                          </button>
                          <button
                            type=""
                            className="bg-transparent outline-0 border-0 text-light"
                          >
                            Edit &nbsp; <TiPencil />
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className="mb-0 details_color s">
                          Company Name: &nbsp;
                          <span className="fs-7">Viking</span>
                        </p>
                        <p className="mb-0 details_color ">
                          Email Address:&nbsp;
                          <span className="fs-7 ">oliver@gmail.com</span>
                        </p>
                        <p className="mb-0 details_color ">
                          VAT Number:&nbsp;{" "}
                          <span className="fs-7 ">FRB4546</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card billing_color text-light">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <p>Lucas Harper</p>
                        <div className="d-flex gap-5">
                          <button
                            type=""
                            className="bg-transparent outline-0 border-0 text-danger"
                          >
                            Delete&nbsp; <FaRegTrashCan />
                          </button>
                          <button
                            type=""
                            className="bg-transparent outline-0 border-0 text-light"
                          >
                            Edit &nbsp; <TiPencil />
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className="mb-0 details_color ">
                          Company Name: &nbsp;
                          <span className="fs-7">Stone Tech Zone</span>
                        </p>
                        <p className="mb-0 details_color ">
                          Email Address:&nbsp;
                          <span className="fs-7 ">lucas@stone.com</span>
                        </p>
                        <p className="mb-0 details_color ">
                          VAT Number:&nbsp;{" "}
                          <span className="fs-7 ">GHS3243</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card billing_color text-light">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <p>John Doe</p>
                        <div className="d-flex gap-5">
                          <button
                            type=""
                            className="bg-transparent outline-0 border-0 text-danger"
                          >
                            Delete&nbsp; <FaRegTrashCan />
                          </button>
                          <button
                            type=""
                            className="bg-transparent outline-0 border-0 text-light"
                          >
                            Edit &nbsp; <TiPencil />
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className="mb-0 details_color ">
                          Company Name: &nbsp;
                          <span className="fs-7">Leapfrog</span>
                        </p>
                        <p className="mb-0 details_color ">
                          Email Address:&nbsp;
                          <span className="fs-7 ">leap@careers.com</span>
                        </p>
                        <p className="mb-0 details_color ">
                          VAT Number:&nbsp;{" "}
                          <span className="fs-7 ">LEA756</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card bg-sidebar-color text-light">
              <div className="card-body">
                <div className="d-flex pb-4 pt-3 justify-content-between">
                  <h5 className="fw-bolder">Your Transactions</h5>
                  <p className="date_style ">23-30 March 2021</p>
                </div>
                <div>
                  <p className="date_style ">NEWEST</p>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex gap-2  align-items-center">
                      <FaCircleArrowDown
                        className="text-danger"
                        style={{
                          height: "25px",
                          width: "25px",
                          marginBottom: "10px",
                        }}
                      />
                      <div>
                        <p className="mb-0">Netflix</p>
                        <p className="date_style ">
                          27 March 2021, at 12:30 PM
                        </p>
                      </div>
                    </div>
                    <div className="text-danger">-$2,500</div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex gap-2  align-items-center">
                      <FaCircleArrowUp
                        className="text-success"
                        style={{
                          height: "25px",
                          width: "25px",
                          marginBottom: "10px",
                        }}
                      />
                      <div>
                        <p className="mb-0">Apple</p>
                        <p className="date_style ">
                          27 March 2021, at 12:30 PM
                        </p>
                      </div>
                    </div>
                    <div className="text-success">+$2,500</div>
                  </div>
                </div>

                <div>
                  <p className="date_style ">OLDER</p>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex gap-2  align-items-center">
                      <FaCircleArrowUp
                        className="text-success"
                        style={{
                          height: "25px",
                          width: "25px",
                          marginBottom: "10px",
                        }}
                      />
                      <div>
                        <p className="mb-0">Stripe</p>
                        <p className="date_style ">
                          26 March 2021, at 13:45 PM
                        </p>
                      </div>
                    </div>
                    <div className="text-success">+$800</div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex gap-2  align-items-center">
                      <FaCircleArrowUp
                        className="text-success"
                        style={{
                          height: "25px",
                          width: "25px",
                          marginBottom: "10px",
                        }}
                      />
                      <div>
                        <p className="mb-0">HubSpot</p>
                        <p className="date_style ">
                          26 March 2021, at 12:30 PM
                        </p>
                      </div>
                    </div>
                    <div className="text-success">+$1,700</div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex gap-2  align-items-center">
                      <PiWarningCircle
                        className="text-light"
                        style={{
                          height: "25px",
                          width: "25px",
                          marginBottom: "10px",
                        }}
                      />
                      <div>
                        <p className="mb-0">Webflow</p>
                        <p className="date_style ">
                          26 March 2021, at 12:30 PM
                        </p>
                      </div>
                    </div>
                    <div className="text-light">Pending</div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex gap-2  align-items-center">
                      <FaCircleArrowDown
                        className="text-danger"
                        style={{
                          height: "25px",
                          width: "25px",
                          marginBottom: "10px",
                        }}
                      />
                      <div>
                        <p className="mb-0">Microsoft</p>
                        <p className="date_style ">
                          25 March 2021, at 16:30 PM
                        </p>
                      </div>
                    </div>
                    <div className="text-danger">-$987</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-between">
            <div>
              &copy; 2024, Made with love by Simmmple & Creative Tim for a
              better web
            </div>
            <div className="d-flex gap-4">
              <span>Simmmple</span>
              <span>Creative Tim</span>
              <span>Blog</span>
              <span>License</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingContent;
