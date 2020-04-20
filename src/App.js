import React from 'react';
import './App.css';
import UserDashboard from "./routes/UserDashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>

        <Switch>
          <Route path="/dashboard" component={UserDashboard} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
