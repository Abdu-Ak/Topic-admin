"use client";
import { signOut } from "next-auth/react";
import React, { useState } from "react";

export const Navbar = () => {
  const [droptoggle, setDroptoggle] = useState(false);

  const handeSignOut = () => {
    signOut();
  };

  return (
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a
          className="navbar-brand brand-logo mr-5 font-semibold"
          href="index.html"
        >
          {/* <img src="images/logo.svg" className="mr-2" alt="logo"/> */}
          Topic-Admin
        </a>
        <a className="navbar-brand brand-logo-mini" href="index.html">
          <img src="images/logo-mini.svg" alt="logo" />
        </a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span className="icon-menu"></span>
        </button>
        <ul className="navbar-nav mr-lg-2">
          <li className="nav-item nav-search d-none d-lg-block">
            <div className="input-group">
              <div
                className="input-group-prepend hover-cursor"
                id="navbar-search-icon"
              >
                <span className="input-group-text" id="search">
                  <i className="icon-search"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                id="navbar-search-input"
                placeholder="Search now"
                aria-label="search"
                aria-describedby="search"
              />
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item dropdown">
            <a
              className="nav-link count-indicator dropdown-toggle"
              id="notificationDropdown"
              href="#"
              data-toggle="dropdown"
            >
              <i className="icon-bell mx-0"></i>
              <span className="count"></span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
              aria-labelledby="notificationDropdown"
            >
              <p className="mb-0 font-weight-normal float-left dropdown-header">
                Notifications
              </p>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-success">
                    <i className="ti-info-alt mx-0"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-normal">
                    Application Error
                  </h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    Just now
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-warning">
                    <i className="ti-settings mx-0"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-normal">
                    Settings
                  </h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    Private message
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-info">
                    <i className="ti-user mx-0"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-normal">
                    New user registration
                  </h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    2 days ago
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className="nav-item nav-profile dropdown">
            <a
              className="nav-link dropdown-toggle"
              onClick={() => setDroptoggle(!droptoggle)}
            >
              <img src="images/faces/face28.jpg" alt="profile" />
            </a>
          </li>
          {/* <li className="nav-item nav-settings d-none d-lg-flex">
            <a className="nav-link" onClick={() => setDroptoggle(!droptoggle)}>
              <i className="icon-ellipsis"></i>
            </a>
          </li> */}
        </ul>

        {droptoggle && (
          <div class="absolute right-0 top-14 z-10 mr-9 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="p-1">

              <button class="text-gray-700 block w-full px-4 py-2 text-left align-middle text-base hover:bg-[#4B49AC] hover:text-white hover:rounded-md group">
                <i class="feather-settings text-[#4B49AC] group-hover:text-white mr-3 "></i>
                <span class="group-hover:text-white">Settings</span>
              </button>

              {/* <button class="text-gray-700 block w-full px-4 py-2 text-left text-base hover:bg-[#4B49AC] hover:text-white hover:rounded-md">
                Profile
              </button> */}
              <button
                class="text-gray-700 block w-full px-4 py-2 text-left align-middle text-base hover:bg-[#4B49AC] hover:text-white hover:rounded-md group"
                onClick={handeSignOut}
              >
               <i class="feather-log-out text-[#4B49AC] group-hover:text-white mr-3"></i>
                Sign out
              </button>
            </div>
          </div>
        )}

        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="icon-menu"></span>
        </button>
      </div>
    </nav>
  );
};
