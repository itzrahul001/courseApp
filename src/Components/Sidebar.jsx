import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav
      className="vh-100 p-3 d-flex flex-column"
      style={{
        width: collapsed ? "70px" : "230px",
        background:   "linear-gradient(135deg, #0f314e, #1f4f7a)",
        transition: "width 0.3s ease",
      }}
    >
      {/* Toggle Button */}
      <button
        className="btn btn-outline-light mb-4"
        onClick={() => setCollapsed(!collapsed)}
      >
        <i className={`bi ${collapsed ? "bi-list" : "bi-x-lg"}`}></i>
      </button>

      {/* Title */}
      {!collapsed && (
        <h4 className="text-white text-center fw-bold mb-4">
          Dashboard
        </h4>
      )}

      {/* Menu */}
      <ul className="nav flex-column gap-2">
        <SidebarLink to="/" icon="bi-house-door" label="Home" collapsed={collapsed} />
        <SidebarLink to="/courses" icon="bi-book" label="View Courses" collapsed={collapsed} />
        <SidebarLink to="/add-course" icon="bi-plus-circle" label="Add Courses" collapsed={collapsed} />
        <SidebarLink to="/about" icon="bi-info-circle" label="About" collapsed={collapsed} />
        <SidebarLink to="/contact" icon="bi-envelope" label="Contact" collapsed={collapsed} />
      </ul>
    </nav>
  );
}

function SidebarLink({ to, icon, label, collapsed }) {
  return (
    <li className="nav-item">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `nav-link d-flex align-items-center gap-3 px-3 py-2 rounded sidebar-link ${
            isActive ? "active-link" : "text-white"
          }`
        }
      >
        <i className={`bi ${icon} fs-5`}></i>
        {!collapsed && <span>{label}</span>}
      </NavLink>
    </li>
  );
}

export default Sidebar;
