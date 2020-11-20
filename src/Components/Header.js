import React, { useState } from "react";
import style from "../Css/main.css";

export default function Header() {
  return (

   

    // HEADER
    <header>

      <nav className="navbar navbar-expand-md navbar-light">
        <a className="weblogo" href="#"><img src="./img/web-logo.png" /></a>
      
        <div className="" id="navbarNav">
          <div className="header__menu">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
            <li className="nav-item">
              <a className="nav-link" href="#">Lịch Chiếu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cụm Rạp</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Tin tức</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ứng dụng</a>
            </li>
          </ul>
          </div>
          <div className="header__user">
            <div className="account">
              <img src="./img/avatar.png" />
              <span>Đăng nhập</span>
            </div>
            <div className="location">
              <div className="location__logo"><img src="./img/location-header.png" /></div>
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Hồ Chí Minh
                </button>
                <div className="dropdown-menu selectScroll" aria-labelledby="dropdownMenu2">
                  <a className="dropdown-item" href="#">Hồ Chí Minh</a>
                  <a className="dropdown-item" href="#">Hà Nội</a>
                  <a className="dropdown-item" href="#">Đà Nẵng</a>
                  <a className="dropdown-item" href="#">Buôn Mê Thuộc</a>
                </div>
              </div>
            </div>
          </div>
          <span className="menu-option_Logo" onClick="openNav()"><img src="./img/menu-options.png" /></span>
        </div>
        
        <div className="sidenav">
          
          <div className="rightMenu" id="mySidenav">
            <div className="account">
              <img src="./img/avatar.png" />
              <span>Đăng nhập</span>
              <span className="next-session_Logo" onClick="closeNav()" ><img src="./img/next-session.png" /></span>
            </div>
           
            <a className="nav-link" href="#">Lịch Chiếu</a>
            <a className="nav-link" href="#">Cụm Rạp</a>
            <a className="nav-link" href="#">Tin tức</a>
            <a className="nav-link" href="#">Ứng dụng</a>
            <a className="nav-link" href="#">Hồ Chí Minh</a>
        </div>
      
        </div>
       
      </nav>

     

    </header>

  );
}
