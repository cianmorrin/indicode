import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import Explore from "./pages/Explore";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/learning" component={Learning} />
          <Route path="/explore" component={Explore} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
