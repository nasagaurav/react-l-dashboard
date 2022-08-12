import React from "react";

export default function Aside() {
  return (
    <div>
      <>
        {/* ======= Sidebar ======= */}
        <aside id="sidebar" className="sidebar">
          <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
              <a className="nav-link collapsed" href="index.html">
                <i className="bi bi-grid" />
                <span>Dashboard</span>
              </a>
            </li>
            {/* End Dashboard Nav */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#components-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-menu-button-wide" />
                <span>Components</span>
                <i className="bi bi-chevron-down ms-auto" />
              </a>
              <ul
                id="components-nav"
                className="nav-content collapse "
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <a href="components-alerts.html">
                    <i className="bi bi-circle" />
                    <span>Alerts</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* End Components Nav */}

            <li className="nav-heading">Pages</li>
            <li className="nav-item">
              <a className="nav-link collapsed" href="users-profile.html">
                <i className="bi bi-person" />
                <span>Profile</span>
              </a>
            </li>

            {/* End Blank Page Nav */}
          </ul>
        </aside>
        {/* End Sidebar*/}
      </>
    </div>
  );
}
