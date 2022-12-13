import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import OrderForm from "../components/OrderForm";
import ShowOrders from "../components/ShowOrders";
import DashboardLayout from "../pages/Home/index";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DashboardLayout />}>
      <Route index element={<OrderForm />} />
      <Route path="/orders" element={<ShowOrders />} />
    </Route>
  )
);
