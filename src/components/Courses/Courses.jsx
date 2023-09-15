import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
// import Calculation from "../Calculation/Calculation";

const Courses = () => {
    const [courses, SetCourses] = useState([]);
    const [courseName, setCourseName] = useState([])
    useEffect(() =>{
        fetch('./data.json')
            .then(response => response.json())
            .then(data => SetCourses(data));
    },[])

    const handleCourseName = (name) =>{
        setCourseName([...courseName, name])
    }

    return (
        <div className="md:flex">
            {/* Card Item Part */}
            <div className=" md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5 p-5 md:p-0">
                {
                    courses.map(course => <Course key={course.id} course={course} handleCourseName={handleCourseName}></Course>)
                }
            </div>
            
            {/* Calculation Part */}
            <div className="border md:w-1/4 h-[450px] mt-5 p-5 space-y-5">
                <div>
                    <h2 className="text-lg font-semibold text-purple-700">Credit Hours Remaining 7hr</h2>
                </div>
                <hr />
                <div className="">
                    <h2 className="text-xl mb-5">Course Name</h2>
                    {
                        courseName.map(item => <li style={{ listStyle: 'number' }} key={item.id}>{item}</li>)
                    }
                </div>
                <hr />
                <div>
                    <h2 className="text-lg font-semibold">Total Credit Hour: </h2>
                </div>
            </div>
        </div>
    );
};

export default Courses;