import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function Home() {
  return (
    <div className="body-color ">
      <div className="row container px-4 py-4">
        <div
          style={{ width: "22%" }}
          className="text-light h-100vh bg-sidebar-color rounded-4"
        >
          <Sidebar />
        </div>
        <div className="col-9 text-light">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default Home;
