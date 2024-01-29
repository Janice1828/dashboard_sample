import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TableList from "../components/TableList";
const Tables = () => {
  return (
    <div className="body-color ">
      <div className="row w-100 m-0 g-0 px-4 py-4">
        <div className="sidebar text-light h-100vh bg-sidebar-color rounded-4">
          <Sidebar />
        </div>
        <div className="home-content text-light">
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default Tables;
