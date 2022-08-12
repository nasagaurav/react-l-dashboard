import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Header() {
  const navigate = useNavigate();
  const logout = () => {
    toast("logged out successfully")
    navigate("/")
  };

  return (
    <div>
      <>
        {/* ======= Header ======= */}
        <header
          id="header"
          className="header fixed-top d-flex align-items-center"
        >
          <div className="d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src="assets/img/logo.png" alt="" />
              <span className="d-none d-lg-block">NiceAdmin</span>
            </a>
            <i className="bi bi-list toggle-sidebar-btn" />
          </div>
          {/* End Logo */}
         
          {/* End Search Bar */}
          <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">
             
              {/* End Search Icon*/}
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-icon"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-bell" />
                  <span className="badge bg-primary badge-number">4</span>
                </a>
                {/* End Notification Icon */}
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                  <li className="dropdown-header">
                    You have 4 new notifications
                    <a href="#">
                      <span className="badge rounded-pill bg-primary p-2 ms-2">
                        View all
                      </span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning" />
                    <div>
                      <h4>Lorem Ipsum</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>30 min. ago</p>
                    </div>
                  </li>

                  <li className="dropdown-footer">
                    <a href="#">Show all notifications</a>
                  </li>
                </ul>
                {/* End Notification Dropdown Items */}
              </li>
              {/* End Notification Nav */}

              {/* End Messages Nav */}
              <li className="nav-item dropdown pe-3">
                <a
                  className="nav-link nav-profile d-flex align-items-center pe-0"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <img
                    src="assets/img/profile-img.jpg"
                    alt="Profile"
                    className="rounded-circle"
                  />
                  <span className="d-none d-md-block dropdown-toggle ps-2">
                    admin
                  </span>
                </a>
                {/* End Profile Iamge Icon */}
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                  <li className="dropdown-header">
                    <h6>Gaurav Nasa</h6>
                    <span>Senior Software Engineer</span>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item d-flex align-items-center">
                      <i className="bi bi-person" />
                      <span>My Profile</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item d-flex align-items-center">
                      <i className="bi bi-gear" />
                      <span>Account Settings</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item d-flex align-items-center">
                      <i className="bi bi-question-circle" />
                      <span>Need Help?</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      onClick={logout}
                      className="dropdown-item d-flex align-items-center"
                    >
                      <i className="bi bi-box-arrow-right" />
                      <span>Sign Out</span>
                    </a>
                  </li>
                </ul>
                {/* End Profile Dropdown Items */}
              </li>
              {/* End Profile Nav */}
            </ul>
          </nav>
          {/* End Icons Navigation */}
        </header>
        {/* End Header */}
      </>
    </div>
  );
}
