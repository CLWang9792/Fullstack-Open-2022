const Header = (props) => {
  const { course } = props;
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = (props) => {
  const { part1, part2, part3 } = props;
  return (
    <div>
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
    </div>

  )
}

const Part = (props) => {
  const { part, exercises } = props;
  return (
    <>
      <p>
        {part} {exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  const { total } = props;
  return (
    <>
      <p>
        Number of exercises {total}
      </p>
    </>
  )

}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const total = part1.exercises + part2.exercises + part3.exercises

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3} />
      <Total total={total} />
    </div>
  )
}

export default App