import React,{useState} from 'react';
import CoursesList from './CoursesList';
import CoursesList1 from './CoursesList1';

const courses = [
  {
    id: 1,
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    author: "Maximilian Schwarzmülller",
    hours_video: 40.5,
    number_of_lectures: 490,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/react-complete-guide/"
  },
  {
    id: 2,
    title: "Modern React with Redux",
    author: "Stephen Grider",
    hours_video: 47.5,
    number_of_lectures: 488,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/modern-react-with-redux/"
  },
  {
    id: 3,
    title: "The Complete React Developer Course (w/ Hooks and Redux)",
    author: "Andrew Mead",
    hours_video: 39,
    number_of_lectures: 200,
    rating: 4.7,
    url: "http://codingthesmartway.net/courses/complete-react-web-app-developer/"
  }
];


const App = () => {

  const [searchText, setSearchText] = useState('');

  const filteredCourses = courses.filter(course => {
    return course.title.includes(searchText) || course.author.includes(searchText);
  });

  const handleSearchInputChange = event => {
    setSearchText(event.target.value);;
  }

  

  return (
    <div>
      <h1>List of Courses with 2 functions</h1>
      <label htmlFor="searchInput">Search:</label>
      
      <input id="searchInput" type="text"
        onChange={handleSearchInputChange}>
      </input>
      
      <h2> List 1</h2>
      <hr />
      {
        <CoursesList courses={filteredCourses}/>
      }
      <h2> List 2</h2>
      <hr />
      {
        <CoursesList1 courses={courses} />
      }
    </div>
  );
}


export default App;