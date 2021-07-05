import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
const Compo = () => {
    return (
        <div>
                <Router>
      <div>
        <h2>Accounts</h2>

        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus Creat</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/:id"  />
        </Switch>
      </div>
    </Router>
        </div>
    );
};

export default Compo;