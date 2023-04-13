import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./header";
import { Footer } from "./footer";

export const CommonPage = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
