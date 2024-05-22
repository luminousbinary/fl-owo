import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar";
import Header from "../../Header";
function MainLayout() {
  return (
    <div className="main-layout">
    <Header/>
    <Navbar />
    <main id="main">
      <Outlet /> 
    </main>
  </div>

  );
}

export default MainLayout;
