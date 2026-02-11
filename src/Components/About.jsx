import React from "react";

function About() {
  return (
    <div className="container">
    
      {/* About Content */}
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="fw-bold mb-3">🎯 Our Purpose</h4>
              <p className="text-muted">
                Course Dashboard is designed to help users easily add, view,
                and manage courses in one place. It focuses on simplicity,
                clarity, and ease of use.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="fw-bold mb-3">🚀 Features</h4>
              <ul className="text-muted">
                <li>Add new courses with details</li>
                <li>View all available courses</li>
                <li>Clean dashboard interface</li>
                <li>Responsive design using Bootstrap</li>
                <li>Built with React & React Router</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="row g-4 mt-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h4 className="fw-bold mb-3">🛠 Technology Stack</h4>
              <p className="text-muted mb-0">
                React • Vite • React Router • Bootstrap • Java (Spring Boot – Backend)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
