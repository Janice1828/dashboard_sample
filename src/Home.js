import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function Home() {
  return (
    <div className="body-color ">
      <div className="row w-100 m-0 px-4 py-4">
        <div className="col-lg-2 text-light h-100vh bg-sidebar-color rounded-4">
          <Sidebar />
        </div>
        <div className="col-lg-10 text-light">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default Home;
