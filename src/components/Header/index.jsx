import React from 'react'

import logo from "../../assets/brand/logo/logo.png";
import profile from "../../assets/react.svg";
function Header() {
  return (
    <header id="header" className=" header header-wrappwer">
        <img src={logo} alt="logo" />

        <div className="search-bar">
          <span className="material-symbols-rounded">search</span>
          <input type="text" placeholder="search" />
        </div>

        <div>
          <span className="material-symbols-rounded">light_mode</span>
          <span className="material-symbols-rounded">nightlight</span>
        </div>

        <div className="profile">
          <img src={profile} alt="profile" />
          userName

        </div>
    </header>
  )
}

export default Header