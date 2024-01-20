import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./Home";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Signup from "./pages/Signup";
import Singin from "./pages/Singin";
import Tables from "./pages/Tables";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/billing" element={<Billing />}></Route>
        <Route path="/rtl" element={<Rtl />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Singin />}></Route>
        <Route path="/tables" element={<Tables />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
