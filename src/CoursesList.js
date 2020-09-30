import React from 'react';

function CoursesList(props) {

    return (
        props.prop1.map(function (course) {
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
    )
}
export default CoursesList;