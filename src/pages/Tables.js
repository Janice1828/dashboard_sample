import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TableList from "../components/TableList";
const Tables = () => {
  return (
    <div className="body-color ">
      <div className="row w-100 m-0 gx-0 px-4 py-4">
        <div
          className="col-xl-2 d-none d-xl-block text-light h-100 bg-sidebar-color rounded-4 position-sticky"
          style={{ top: "30px" }}
        >
          <Sidebar />
        </div>
        <div className="col-xl-10 col-12 text-light">
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default Tables;
