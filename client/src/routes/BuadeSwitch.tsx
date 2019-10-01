import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../components/landing/Landing";
import ProjectsComponent from "../components/projects/ProjectsComponent";

const BuadeSwitch = () => {
  return (

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/projects" component={ProjectsComponent} />
      </Switch>
  );
};

export default BuadeSwitch;
