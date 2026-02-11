import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const hours = new Date().getHours();
  const greeting =
    hours < 12 ? "Good Morning ☀️" : hours < 18 ? "Good Afternoon 🌤️" : "Good Evening 🌙";

  return (
    <header
      className="mb-4 p-4 rounded shadow-sm"
      style={{
        background: "linear-gradient(135deg, #0f314e, #1f4f7a)",
        color: "white",
      }}
    >
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        
        {/* Left content */}
        <div className="text-center text-md-start">
          <h1 className="fw-bold mb-1">Course Dashboard</h1>
          <p className="mb-0 text-light">
            Manage, organize, and track your courses easily
          </p>
          <small className="text-warning fw-semibold">
            {greeting}
          </small>
        </div>

        {/* Actions */}
        <div className="d-flex gap-2">
        

          
        </div>
      </div>
    </header>
  );
}

export default Header;
