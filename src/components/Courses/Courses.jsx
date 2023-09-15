import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const [courses, SetCourses] = useState([0]);
    useEffect(() =>{
        fetch('./data.json')
            .then(response => response.json())
            .then(data => SetCourses(data));
    },[])
    return (
        <div className="md:flex gap-5">
            <div className=" md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5 p-5 md:p-0">
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
            <div className=" md:w-1/4 bg-slate-300 mt-5">
                <h2 className="text-center">Calculation</h2>
            </div>
        </div>
    );
};

export default Courses;