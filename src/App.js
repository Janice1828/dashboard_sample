import { BrowserRouter, Router, Route } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route to="/" component={<Home />}></Route>
      </Router>
    </BrowserRouter>
  );
}

export default App;
