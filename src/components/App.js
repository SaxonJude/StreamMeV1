import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";

import Navbar from './layout/Navbar';
import Landing from './layout/Landing';
import Register from "./auth/Register";
import Login from "./auth/Login";
import PrivateRoute from "./dashboard/private-route/PrivateRoute";
import Dashboard from "./dashboard/Dashboard";

import { Provider } from "react-redux";
import store from "../store";

if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "./login";
    }
}

function App() {
    return (
        <Provider store={store}>
            <div>
                <Router>
                    <div className="container">
                        <Navbar />
                        <br />
                        <Route path="/" exact component={Landing} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/login" exact component={Login} />
                        <Switch>
                            <PrivateRoute exact path="/dashboard" component={Dashboard} />
                        </Switch>
                    </div>
                </Router>
            </div>
        </Provider>
    );
}

export default App;