import React, { useContext } from "react";
import { BrowserRouter as Router, Switch} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRouters } from "./DashboardRouters";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const RouterApp = () => {

  const {user} = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Switch>

          <PublicRoutes isAuthenticated={user.logged} exact path="/login" component={LoginScreen} />

          <PrivateRoutes isAuthenticated={user.logged} path="/" component={DashboardRouters} />

        </Switch>
      </div>
    </Router>
  );
};
