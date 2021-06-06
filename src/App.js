import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserList from "./Pages/userList/UserList";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
