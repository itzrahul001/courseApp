import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCourseById, updateCourse } from "../services/courseServices";

const EditCourse = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    courseName: "",
    description: "",
  });

  // fetch existing course
  useEffect(() => {
    getCourseById(courseId)
      .then((response) => {
        setCourse({
          courseName: response.data.courseName,
          description: response.data.description,
        });
      })
      .catch((error) => {
        console.error("Error fetching course:", error);
      });
  }, [courseId]);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  // update course
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCourse(courseId, course);
      alert("Course updated successfully");
      navigate("/courses");
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Course</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Course Name</label>
          <input
            type="text"
            className="form-control"
            name="courseName"
            value={course.courseName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={course.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Course
        </button>
      </form>
    </div>
  );
};

export default EditCourse;
