import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";


const Courses = () => {
    const [courses, SetCourses] = useState([]);
    const [courseName, setCourseName] = useState([])
    const [totalCredit, setTotalCredit] = useState(0);
    const [remaining, setRemaining] = useState(0)
    const creditRemaining = 20;

    useEffect(() =>{
        fetch('./data.json')
            .then(response => response.json())
            .then(data => SetCourses(data))
    },[])



    const handleCourseName = (course) =>{
        const isExist = courseName.includes(course);
        
        let totalCredit = course?.credit;
        if (isExist) {
            return alert('Already Selected') 
        } else {
            setCourseName([...courseName, course])
            courseName.forEach((item) => {
                totalCredit = totalCredit + item.credit;
            })
            const sum = creditRemaining - totalCredit;
            if (sum < 0) {
                return alert("Credit Finished!");
            } else {
                setTotalCredit(totalCredit);
                setRemaining(sum);
            }
        }
    }

    return (
        <div className="md:flex">
            {/* Card Item Part */}
            
                <div className=" md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5 p-5 md:p-0">
                    {
                        courses.map(course => <Course key={course.id} course={course} handleCourseName={handleCourseName} totalCredit={totalCredit} remaining={remaining} setRemaining={setRemaining}></Course>)
                    }
                </div>
            
            
            {/* Calculation Part */}
            <div className="border md:w-1/4 mt-5 p-5 space-y-5">
                <div>
                    <h2 className="text-lg font-semibold text-purple-700">Credit Hours Remaining {creditRemaining} hr</h2>
                </div>
                <hr />
                <div className="">
                    <h2 className="text-xl mb-5">Course Name</h2>
                    {
                        courseName.map(item => <li style={{ listStyle: 'number', marginTop:'5px' }} key={item.id}>{item}</li>)
                    }
                </div>
                <hr />
                <div>
                    <h2 className="text-lg font-semibold">Total Credit Hour:{totalCredit} </h2>
                </div>
            </div>
        </div>
    );
};



export default Courses;
