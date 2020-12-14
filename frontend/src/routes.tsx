import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Mapa from "./pages/Mapa";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Mapa} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
