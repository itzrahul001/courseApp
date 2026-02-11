import { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddCourse from "./Components/AddCourses";
import ViewCourses from "./Components/ViewCourses";
import Home from "./Components/Home"
import About from "./Components/About";
import Contact from "./Components/Contact";
import EditCourse from "./Components/EditCourse";

function App() {
 

  return (
    <>
   
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1 p-4">

        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/courses" element={<ViewCourses/>} />
          <Route path="/add-course" element={<AddCourse/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
           <Route path="/edit-course/:courseId" element={<EditCourse />} />
        </Routes>
      </div>
    </div>
     
    </>
  );
}

export default App;
