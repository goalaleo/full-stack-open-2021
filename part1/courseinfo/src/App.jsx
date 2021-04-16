import React from 'react';

const Header = ({ course }) => (
  <h1>{course.name}</h1>
);

const Content = ({ course }) => (
  <div>
    {course.parts.map((part) => (
      <Part key={part.name} name={part.name} numExercises={part.exercises} />
    ))}
  </div>
);

const Total = ({ totalExecises }) => (
  <p>
    Number of exercises
    {' '}
    {totalExecises}
  </p>
);

const Part = ({ name, numExercises }) => (
  <p>
    {name}
    {' '}
    {numExercises}
  </p>
);

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  const totalExecises = course.parts.reduce((memo, part) => memo + part.exercises, 0);

  return (
    <div>
      <Header course={course} />
      <Content
        course={course}
      />
      <Total total={totalExecises} />
    </div>
  );
};

export default App;
