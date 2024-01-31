import React from "react";
import Navbar from "./Navbar";
import profile from "../img/profile.jpg";
import car_one from "../img/car_one.jpg";
import car_two from "../img/car_two.jpg";
import car_three from "../img/car_three.jpg";
const ProfileContent = () => {
  return (
    <div className="ps-5">
      <Navbar header="Profile" className="col-12" />
      <div className="row pt-4 g-3">
        <div className="col-12 d-flex justify-content-between profile-bg py-4 px-4 rounded-4">
          <div className="d-flex gap-2 align-items-center ">
            <img src={profile} alt="" height="60px" className="rounded-3" />
            <div>
              <h5 className="mb-0">Lily Smith</h5>
              <span>mark@simmmple.com</span>
            </div>
          </div>
          <div className="d-flex gap-3">
            <button type="" className="btn btn-primary">
              OVERVIEW
            </button>
            <button type="" className="btn text-light bg-transparent border-0">
              TEAMS
            </button>
            <button type="" className="btn text-light bg-transparent border-0">
              PROJECTS
            </button>
          </div>
        </div>
        <div className="col-6">
          <div className="card welcome_bg text-light">
            <div className="card-body">
              <h3>Welcome Back!</h3>
              <span className="d-inline-block pb-5">
                Nice to see you, Mark Johnson!
              </span>
              <p className="pt-5">Tab to record </p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card profile-bg text-light">
            <div className="card-body">
              <h5>Profile Information</h5>
              <p>
                Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer
                is no. If two equally difficult paths, choose the one more
                painful in the short term (pain avoidance is creating an
                illusion of equality).
              </p>
              <p>
                <span>Full Name:</span>
                <span>Mark Johnson</span>
              </p>
              <p>
                <span>Mobile:</span>
                <span>(44) 123 1234 123</span>
              </p>
              <p>
                <span>Email:</span>
                <span>mark@simmmple.com</span>
              </p>
              <p>
                <span>Location:</span>
                <span>United States</span>
              </p>
              <p>
                <span>Social Media:</span>
                <span>Facebook</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card profile-bg text-light">
            <div className="card-body">
              <h5>Car Information</h5>
              <p>Hello, Mark Johnson Your car is ready.</p>
              <div className="d-flex gap-4">
                <div>
                  <div>
                    <h1>68%</h1>
                    <p>Current Load</p>
                  </div>
                  <div>
                    <h5>0h 58 min</h5>
                    <p>Time to full charge</p>
                  </div>
                </div>
                <div>
                  <div className="card bg-sidebar-color text-light">
                    <div className="card-body">
                      <div>
                        <p>Battery Health</p>
                        <h5>76%</h5>
                      </div>
                      <div>Icon</div>
                    </div>
                  </div>
                  <div className="card bg-sidebar-color text-light">
                    <div className="card-body">
                      <div>
                        <p>Consumtion</p>
                        <h5>163W/Km</h5>
                      </div>
                      <div>Icon</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card bg-sidebar-color text-light">
                    <div className="card-body">
                      <p>Efficiency</p>
                      <h5>+20%</h5>
                    </div>
                  </div>
                  <div className="card bg-sidebar-color text-light">
                    <div className="card-body">
                      <p>This Week</p>
                      <h5>1.342km</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card profile-bg text-light">
            <div className="card-body">
              <h5>Platform Settings</h5>
              <p>Account</p>
              <p>Email me when someone....</p>
              <p>Email me when someone....</p>
              <p>Email me when someone....</p>
              <p>Application</p>
              <p>New Launched and projects</p>
              <p>Month product changes</p>
              <p>Subscribe to newsletter</p>
              <p>Receive mails weekly</p>
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="card profile-bg text-light">
            <div className="card-body">
              <h5>Projects</h5>
              <p>Architects design houses</p>
              <div className="d-flex gap-1">
                <div className="card bg-sidebar-color text-light">
                  <div className="card-body">
                    <img
                      src={car_one}
                      alt="Image"
                      width="100%"
                      className="rounded-3"
                    />
                    <span>Project #1</span>
                    <h5>Modern</h5>
                    <p>
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
                      src={car_two}
                      alt="Image"
                      width="100%"
                      className="rounded-3"
                    />
                    <span>Project #2</span>
                    <h5>Scandinavian</h5>
                    <p>
                      Music is something that every person has his or her own
                      specific opinion about.
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
                    <span>Project #3</span>
                    <h5>Minimalist</h5>
                    <p>
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
