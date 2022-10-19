import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import Home from "../pages/Home/index.js";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact element={<Home />} />
      </Switch>
    </BrowserRouter>
  );
}
