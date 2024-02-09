import React from "react";
import Sidebar from "../components/Sidebar";
import ProfileContent from "../components/ProfileContent";
const Profile = () => {
  return (
    <div className="body-color ">
      <div className="row gx-0 px-4 py-4">
        <div
          className="col-xl-2 d-none d-xl-block position-sticky text-light h-100 bg-sidebar-color rounded-4"
          style={{ top: "30px" }}
        >
          <Sidebar />
        </div>
        <div className="col-xl-10 col-12 text-light">
          <ProfileContent />
        </div>
      </div>
    </div>
  );
};

export default Profile;
