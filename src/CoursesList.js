import React from 'react';

//fat arrow anonymouse functions limit scope, eg what is 'this'
//object destructuring, props is an object passed in, using {courses} pulls that from the object
//so coutses is the object being worked rather than refe to props.courses
const CoursesList = ({courses}) => {
    return courses.map(course => {
        return (
            <div key={course.id}>
                    <span><strong>{course.title}</strong> :  </span>
                    <span>By: {course.author}</span>
                    <p />
                    <span>Course URL: {course.url}</span>
                    <span>|Hours:{course.hours_video}</span>
                    <span>|#Lessons:{course.number_of_lectures}</span>
                    <span>|Rating:{course.rating}</span>
                    <p />


                </div>
            );
        })
    
}
export default CoursesList;