import axiosInstance from "../api/axiosConfig";

// GET all courses
export const getAllCourses = () => {
  return axiosInstance.get("/api/courses");
};

// POST add course
export const addCourse = (course) => {
  return axiosInstance.post("/api/courses", course);
};


// DELETE course
export const deleteCourse = (id) => {
  return axiosInstance.delete(`/api/courses/${id}`);
};

// GET course by ID
export const getCourseById = (id) => {
  return axiosInstance.get(`/api/courses/${id}`);
};

// UPDATE course
export const updateCourse = (id, course) => {
  return axiosInstance.put(`/api/courses/${id}`, course);
};