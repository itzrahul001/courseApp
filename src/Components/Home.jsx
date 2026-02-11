import React from "react";

function Home() {
  return (
    <div className="container">
      {/* Welcome Section */}
      <div className="mb-5 text-center">
        <h1 className="fw-bold">Welcome to Course Dashboard 🎓</h1>
        <p className="text-muted mt-2">
          Manage your courses easily — add, view, and organize all in one place.
        </p>
      </div>

      {/* Stats Section */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h5 className="card-title">Total Courses</h5>
              <h2 className="fw-bold text-primary">12</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h5 className="card-title">Active Courses</h5>
              <h2 className="fw-bold text-success">8</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h5 className="card-title">New Courses</h5>
              <h2 className="fw-bold text-warning">3</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title fw-bold">📚 View Courses</h5>
              <p className="card-text text-muted">
                Browse all available courses and manage them easily.
              </p>
              <a href="/courses" className="btn btn-outline-primary">
                Go to Courses
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title fw-bold">➕ Add New Course</h5>
              <p className="card-text text-muted">
                Add a new course with details and description.
              </p>
              <a href="/add-course" className="btn btn-outline-success">
                Add Course
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
