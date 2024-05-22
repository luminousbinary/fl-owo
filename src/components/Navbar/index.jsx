import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const navData = [
    {
      path: "/",
      element: " Dashboard", // Child routes will be rendered inside the Outlet in MainLayout
      icon: <span className="material-symbols-rounded">Dashboard</span>,
    },
    {
      path: "exchange",
      element: "Exchange",
      icon: <span className="material-symbols-rounded">currency_exchange</span>,
    },
    {
      path: "wallet",
      element: "Wallet",
      icon: <span className="material-symbols-rounded">wallet</span>,
    },
    {
      path: "transactions",
      element: "Transactions",
      icon: <span className="material-symbols-rounded">receipt_long</span>,
    },
    {
      path: "analytics",
      element: "Analytics",
      icon: <span className="material-symbols-rounded">monitoring</span>,
    },
    {
      path: "messages",
      element: "Messages",
      icon: <span className="material-symbols-rounded">chat</span>,
    },
    {
      path: "help-center",
      element: "Help Center",
      icon: <span className="material-symbols-rounded">contact_support</span>,
    },
    {
      path: "settings",
      element: "Settings",
      icon: <span className="material-symbols-rounded">settings</span>,
    },
  ];
  return (
    <aside className="sidebar">
      <div className="sidebar-list">
        {navData.map((nv, index) => (
          <Link key={index} to={nv.path}>
            {nv.icon}
            {nv.element}
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default Navbar;
