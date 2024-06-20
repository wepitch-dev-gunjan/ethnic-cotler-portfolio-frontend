import React, { useContext } from "react";
import "./Layout.scss";
import { Outlet } from "react-router-dom";
import { LayoutContext } from "./setup/states/LayoutContext";

const Layout = () => {
  const { profileMenuEnable } = useContext(LayoutContext)
  return (
    <div className="Layout-container">

      <Outlet />
    </div>
  );
};

export default Layout;
