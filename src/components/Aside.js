import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Aside() {
  const state = useSelector(s=>s);
  const { menu } = state;
  return (
    <div>
      <>
        {/* ======= Sidebar ======= */}
        <aside id="sidebar" className={!menu ? "sidebar" : "sidebar active"}>
          <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
              <Link className="nav-link collapsed" to="/Dashboard">
                <i className="bi bi-grid" />
                <span>Dashboard</span>
              </Link>
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
                  <a href="#">
                    <i className="bi bi-circle" />
                    <span>Alerts</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* End Components Nav */}

            <li className="nav-heading">Pages</li>
            <li className="nav-item">
              <a className="nav-link collapsed" href="#">
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
