  
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPage from "../pages/admin/admin-page";
import LoginPage from "../pages/auth/login-page";
import RegisterPage from "../pages/auth/register-page";
import Error404Page from "../pages/error404-page";

export default function AppRouter() {
    return (
       <Router>
          <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/admin" component={AdminPage} />
          <Route path="*" component={Error404Page} />
        </Switch>
       </Router>
    )
}
