import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar></NavBar>
      <div>{children}</div>
    </>
  );
};

export default Layout;
