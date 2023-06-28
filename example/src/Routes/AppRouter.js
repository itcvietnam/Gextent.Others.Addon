import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Components/Home";

function AppRouter() {
  return (
    <Router basename={"/Others/Others/React/Gextent.Others.Addon-main/Gextent.Others.Addon-main/example/build"}>
      <Route exact path={`/`} component={Home} />
    </Router>
  );
}

export default AppRouter;