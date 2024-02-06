import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TableList from "../components/TableList";
const Tables = () => {
  return (
    <div className="body-color ">
      <div className="row w-100 m-0 gx-0 px-4 py-4">
        <div
          className="sidebar text-light h-100 bg-sidebar-color rounded-4 position-sticky"
          style={{ top: "30px" }}
        >
          <Sidebar />
        </div>
        <div className="main_content text-light">
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default Tables;
