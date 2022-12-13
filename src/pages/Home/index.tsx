import React from "react";
import { Outlet } from "react-router-dom";
import PageWithSidebar from "../../components/PageWithSidebar";

const DashboardLayout = () => {
  return (
    <PageWithSidebar>
      <Outlet />
    </PageWithSidebar>
  );
};

export default DashboardLayout;
