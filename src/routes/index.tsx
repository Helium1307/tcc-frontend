import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import Home from "../pages/Home/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home>asd</Home>} />
      </Switch>
    </BrowserRouter>
  );
}
