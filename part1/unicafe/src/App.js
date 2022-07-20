import { useState } from 'react'

const Head = ({ tital }) => <div><h1>{tital}</h1></div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => <p>{text} {value}</p>

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text={"good"} value={good} />
          <StatisticLine text={"neutral"} value={neutral} />
          <StatisticLine text={"bad"} value={bad} />
          <StatisticLine text={"all"} value={good + neutral + bad} />
          <StatisticLine text={"average"} value={(good - bad) / (good + neutral + bad)} />
          <StatisticLine text={"positive"} value={good / (good + neutral + bad) * 100 + '%'} />
        </tbody>
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  let [good, setGood] = useState(0)
  let [neutral, setNeutral] = useState(0)
  let [bad, setBad] = useState(0)
  const tital1 = 'give feedback'
  const tital2 = 'statistics'


  return (
    <div>
      <Head tital={tital1} />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Head tital={tital2} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>


  )
}

export default App