import React from "react";
import ResponsiveDrawer from "./ResponsiveDrawer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <ResponsiveDrawer />
      <Outlet /> {/* Renders child routes */}
    </div>
  );
};

export default Layout;
