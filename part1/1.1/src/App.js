const Header = (props) => {
  const {course} = props;
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = (props) => {
  const { part, exercises } = props;
  return (
    <div>
      <Part part={part} exercises={exercises} />
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
  const {total} = props;
  return(
  <>
    <p>
      Number of exercises {total}
    </p>
  </>
  )
  
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total total={total} />
    </div>
  )
}

export default App