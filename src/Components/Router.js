import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import CameraContainer from "./Container/Camera/CameraContainer";

const CameraRoutes = () => (
  <>
    <Route exact path="/" component={CameraContainer} />
  </>
);

const AppRouter = () => (
  <Router>
    <Switch>
      <CameraRoutes />
    </Switch>
  </Router>
);

export default AppRouter;
