import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TableList from "../components/TableList";
const Tables = () => {
  return (
    <div className="body-color ">
      <div className="row m-0 px-4 py-4">
        <div className="col-2 text-light bg-sidebar-color rounded-4">
          <Sidebar />
        </div>
        <div className="col-10 text-light">
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default Tables;
