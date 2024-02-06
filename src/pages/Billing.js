import React from "react";
import Sidebar from "../components/Sidebar";
import BillingContent from "../components/BillingContent";
const Billing = () => {
  return (
    <div className="body-color ">
      <div className="row g-0 px-4 py-4">
        <div
          className="sidebar position-sticky text-light h-100 bg-sidebar-color rounded-4"
          style={{ top: "30px" }}
        >
          <Sidebar />
        </div>
        <div className="main_content text-light">
          <BillingContent />
        </div>
      </div>
    </div>
  );
};

export default Billing;
