import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function Home() {
  return (
    <div className="bg-black">
      <div className="row container px-4 py-4">
        <div className="col-3 text-light h-100vh bg-danger rounded-2">
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
