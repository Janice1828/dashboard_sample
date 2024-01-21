import React from "react";
import Navbar from "./Navbar";
import Table2 from "./Table2";

const TableList = () => {
  return (
    <div className="row gy-4 px-4">
      <Navbar header="Tables" className="col-12" />

      <div className="col-12 card bg-sidebar-color border-0 text-light">
        <div className="card-body">
          <h5>Authors Table</h5>
          <table className="table" id="t_test">
            <thead>
              <tr>
                <th>AUTHOR</th>
                <th>FUNCTION</th>
                <th>STATUS</th>
                <th>EMPLOYED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Esthera Jackson</td>
                <td>Organization</td>
                <td>
                  <button className="btn btn-success">Online</button>
                </td>
                <td>14/04/21</td>
                <td>Edit</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>Developer</td>
                <td>
                  <button className="btn btn-outline-light">Offline</button>
                </td>
                <td>12/3/23</td>
                <td>Edit</td>
              </tr>
              <tr>
                <td>Joena Doe</td>
                <td>Project Executive</td>
                <td>
                  <button type="" className="btn btn-success">
                    Online
                  </button>
                </td>
                <td>3/3/22</td>
                <td>Edit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-12 card bg-sidebar-color border-0 text-light">
        <Table2 />
      </div>
    </div>
  );
};

export default TableList;
