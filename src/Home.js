import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function Home() {
  return (
    <div className="body-color ">
      <div className="row w-100 gx-0 m-0 px-4 py-4">
        <div className="sidebar text-light h-100vh bg-sidebar-color rounded-4">
          <Sidebar />
        </div>
        <div className="home-content text-light">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default Home;
