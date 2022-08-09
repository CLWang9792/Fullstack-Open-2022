import React from 'react'

const Header = ({ tital }) => {
  return (
    <div>
      <h1>{tital}</h1>
    </div>
  )
}

const SubHeader = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ part }) => {
  return (
    <div>
      {part.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

const Total = ({ part }) => {
  const total = part.map(item => item.exercises).reduce((a, b) => a + b)
  return <p>total of {total} exercises</p>
}

const Course = ({ course }) => {
  return (
    <div>
      <Header tital={'Web development curriculum'} />
      {course.map(course => (
        <>
          <SubHeader key={course.id} course={course} />
          <Content key={course.id} part={course.part} />
          <Total key={course.id} part={course.part} />
        </>
      ))}
    </div>
  )
}

export default Course
