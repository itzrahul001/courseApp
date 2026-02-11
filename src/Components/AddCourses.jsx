import React, { useState } from "react";
import {addCourse} from "../services/courseServices"

function AddCourse() {
  const [course, setCourse] = useState({
    courseId: "",
    courseName: "",
    description: "",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  // handle form submit
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCourse(course);
      alert("Course added successfully!");
      setCourse({courseId:"", courseName: "", description: "" });
    } catch (error) {
      console.error(error);
      alert("Error adding course");
    }
  };
  return (
    <div className="container">
      <div className="card shadow p-4" style={{ maxWidth: "500px" }}>
        <h3 className="text-center mb-4 fw-bold">
          Add New Course
        </h3>

        <form onSubmit={handleSubmit}>
          {/* Course ID */}
          <div className="mb-3">
            <label className="form-label">Course ID</label>
            <input
              type="text"
              className="form-control"
              name="courseId"
              value={course.courseId}
              onChange={handleChange}
              placeholder="Enter course id"
              required
            />
          </div>

          {/* Course Name */}
          <div className="mb-3">
            <label className="form-label">Course Name</label>
            <input
              type="text"
              className="form-control"
              name="courseName"
              value={course.courseName}
              onChange={handleChange}
              placeholder="Enter course name"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Course Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="3"
              value={course.description}
              onChange={handleChange}
              placeholder="Enter course description"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;
