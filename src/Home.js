import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function Home() {
  return (
    <div className="body-color ">
      <div className="row w-100 m-0 gx-0 px-4 py-4">
        <div
          className="col-xl-2 d-none d-xl-block h-100 position-sticky"
          style={{ top: "30px" }}
        >
          <div className="text-light bg-sidebar-color rounded-4">
            <Sidebar />
          </div>
        </div>
        <div className="col-xl-10 col-12 text-light">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default Home;
