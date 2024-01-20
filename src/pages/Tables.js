import React from "react";
import Sidebar from "../components/Sidebar";
const Tables = () => {
  return (
    <div className="body-color ">
      <div className="row container px-4 py-4">
        <div
          style={{ width: "22%" }}
          className="text-light h-100vh bg-sidebar-color rounded-4"
        >
          <Sidebar />
        </div>
        <div className="col-9 text-light">Tables</div>
      </div>
    </div>
  );
};

export default Tables;
