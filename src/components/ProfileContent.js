import React from "react";
import Navbar from "./Navbar";
import profile from "../img/profile.jpg";
import car_one from "../img/car_one.jpg";
import car_two from "../img/car_two.jpg";
import car_three from "../img/car_three.jpg";
import { GrOverview } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

import { FaFile } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";

const ProfileContent = () => {
  return (
    <div className="ps-xl-5">
      <div className="d-none d-lg-block">
        <Navbar header="Profile" className="col-12" />
      </div>
      <div className="row pt-3 g-3 w-100 m-auto">
        <div className="col-12 d-flex justify-content-between profile-bg py-4 px-4 rounded-4">
          <div className="d-flex gap-2 align-items-center ">
            <img src={profile} alt="" height="60px" className="rounded-3" />
            <div>
              <h5 className="mb-0 fw-bolder">Lily Smith</h5>
              <span>mark@simmmple.com</span>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <button type="" className="btn btn-primary">
              <GrOverview />
              <span className="fw-bolder"> OVERVIEW</span>
            </button>
            <button type="" className="btn text-light bg-transparent border-0">
              <FaFile />
              <span className="fw-bolder"> TEAMS</span>
            </button>
            <button type="" className="btn text-light bg-transparent border-0">
              <FaPenFancy /> <span className="fw-bolder"> PROJECTS</span>
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card welcome_bg text-light">
            <div className="card-body">
              <h3 className="fw-bolder">Welcome Back!</h3>
              <div className="pb-4">
                <span className="d-inline-block pb-5 mb-5">
                  Nice to see you, Mark Johnson!
                </span>
              </div>
              <div className="pt-3">
                <p className="pt-5 mt-5">
                  <button
                    type=""
                    className="border-0 outline-0 bg-transparent text-light"
                  >
                    Tab to record
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card profile-bg text-light">
            <div className="card-body">
              <h5 className="fw-bolder pb-3">Profile Information</h5>
              <p>
                Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer
                is no. If two equally difficult paths, choose the one more
                painful in the short term (pain avoidance is creating an
                illusion of equality).
              </p>
              <p>
                <span className="details_color">Full Name:</span>
                <span>Mark Johnson</span>
              </p>
              <p>
                <span className="details_color">Mobile:</span>
                <span>(44) 123 1234 123</span>
              </p>
              <p>
                <span className="details_color">Email:</span>
                <span>mark@simmmple.com</span>
              </p>
              <p>
                <span className="details_color">Location:</span>
                <span>United States</span>
              </p>
              <p className="d-flex gap-2 align-items-center">
                <span className="details_color">Social Media:</span>
                <span className="d-inline-flex gap-2 ">
                  <IoLogoInstagram />
                  <FaFacebook />
                  <FaTwitter />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card profile-bg text-light">
            <div className="card-body">
              <h5 className="fw-bolder">Car Informations</h5>
              <p className="details_color">
                Hello, Mark Johnson Your car is ready.
              </p>
              <div className="row g-2">
                <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                  <div className="w-100">
                    <div className="bg-dark rounded-circle p-4 text-center">
                      <h1>68%</h1>
                      <p>Current Load</p>
                    </div>
                    <div className="text-center pt-3">
                      <h5 className="fw-bolder mb-0">0h 58 min</h5>
                      <p className="details_color">Time to full charge</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-12 d-flex flex-column gap-3">
                  <div className="w-100 card bg-sidebar-color text-light">
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <div>
                        <p>Battery Health</p>
                        <h5>76%</h5>
                      </div>
                      <div>Icon</div>
                    </div>
                  </div>
                  <div className="card bg-sidebar-color text-light">
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <div>
                        <p>Consumtion</p>
                        <h5>163W/Km</h5>
                      </div>
                      <div>Icon</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-12 d-flex flex-column gap-3">
                  <div className="w-100 card bg-sidebar-color text-light">
                    <div className="card-body">
                      <p className="date_style mb-3">Efficiency</p>
                      <h5 className="fw-bold">+20%</h5>
                    </div>
                  </div>
                  <div className="card bg-sidebar-color text-light">
                    <div className="card-body">
                      <p className="date_style mb-3">This Week</p>
                      <h5 className="fw-bold">1.342km</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="card profile-bg text-light p-2">
            <div className="card-body">
              <h5 className="fw-bold pb-3">Platform Settings</h5>
              <p className="date_style">Account</p>
              <div className="d-flex flex-column gap-4">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked
                  />
                  <label
                    class="form-check-label date_style"
                    for="flexSwitchCheckChecked"
                  >
                    Email me when someone....
                  </label>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                  />
                  <label
                    class="form-check-label date_style"
                    for="flexSwitchCheckChecked"
                  >
                    Email me when someone....
                  </label>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked
                  />
                  <label
                    class="form-check-label date_style"
                    for="flexSwitchCheckChecked"
                  >
                    Email me when someone....
                  </label>
                </div>
              </div>

              <p className="date_style pt-3">Application</p>
              <div className="d-flex flex-column gap-4">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                  />
                  <label
                    class="form-check-label date_style"
                    for="flexSwitchCheckChecked"
                  >
                    New Launched and projects
                  </label>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked
                  />
                  <label
                    class="form-check-label date_style"
                    for="flexSwitchCheckChecked"
                  >
                    Month product changes
                  </label>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                  />
                  <label
                    class="form-check-label date_style"
                    for="flexSwitchCheckChecked"
                  >
                    Subscribe to newsletter
                  </label>
                </div>
                <div class="form-check form-switch pb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked
                  />
                  <label
                    class="form-check-label date_style"
                    for="flexSwitchCheckChecked"
                  >
                    Receive mails weekly
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-12">
          <div className="card profile-bg text-light">
            <div className="card-body">
              <h5 className="fw-bold">Projects</h5>
              <p className="date_style">Architects design houses</p>
              <div className="d-flex gap-2">
                <div className="card bg-sidebar-color text-light">
                  <div className="card-body">
                    <img
                      src={car_one}
                      alt="Image"
                      width="100%"
                      className="rounded-3"
                    />
                    <span className="project">Project #1</span>
                    <h5 className="fw-bold">Modern</h5>
                    <p className="date_style">
                      As Uber works through a huge amount of internal management
                      turmoil.
                    </p>
                    <div>
                      <button type="" className="btn btn-outline-light">
                        View all
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card bg-sidebar-color text-light">
                  <div className="card-body">
                    <img
                      src={car_three}
                      alt="Image"
                      width="100%"
                      className="rounded-3"
                    />
                    <span className="project">Project #3</span>
                    <h5 className="fw-bold">Minimalist</h5>
                    <p className="date_style">
                      Different people have different taste, especially various
                      types of music.
                    </p>
                    <div>
                      <button className="btn btn-outline-light">
                        View all
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-between">
          <div>
            &copy; 2024, Made with love by Simmmple & Creative Tim for a better
            web
          </div>
          <div className="d-flex gap-5">
            <span>simmmple</span>
            <span>Creative Tim</span>
            <span>Blog</span>
            <span>License</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
