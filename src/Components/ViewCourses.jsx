import React, { useEffect, useState } from "react";
import { getAllCourses, deleteCourse } from "../services/courseServices";
import { useNavigate } from "react-router-dom";

function ViewCourses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const response = await getAllCourses();
      setCourses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    try {
      await deleteCourse(id);
      setCourses(courses.filter((course) => course.courseId !== id));
    } catch (error) {
      console.error(error);
      alert("Failed to delete course");
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-course/${id}`);
  };

  return (
    <div className="container">
      <h3 className="mb-4 fw-bold text-center">Available Courses</h3>

      {courses.length === 0 ? (
        <p className="text-center text-muted">No courses available</p>
      ) : (
        <div className="row g-4">
          {courses.map((course) => (
            <div className="col-md-4" key={course.courseId}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    {course.courseName}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Course ID: {course.courseId}
                  </h6>
                  <p className="card-text">
                    {course.description}
                  </p>
                </div>

                <div className="card-footer bg-transparent border-0">
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => handleEdit(course.courseId)}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(course.courseId)}
                    className="btn btn-sm btn-outline-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewCourses;
