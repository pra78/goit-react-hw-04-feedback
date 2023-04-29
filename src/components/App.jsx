import { useState } from "react"
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const handleFeedback = (choice) => {
    switch (choice) {
      case 'good':
        setGood(prevState => (prevState + 1));
        break;
      case 'neutral':
        setNeutral(prevState => (prevState + 1));
        break;
      case 'bad':
        setBad(prevState => (prevState + 1));
        break;
      default:
        break;
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad
  }
  
  function countPositiveFeedbackPercentage() {
    return (countTotalFeedback() ? Math.round(good / countTotalFeedback() * 100) : 0);
  }

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <>
      <Section title="Please leave feedback"></Section>
      <FeedbackOptions options={options} onLeaveFeedback={handleFeedback}></FeedbackOptions>
      {total ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}></Statistics> : <Notification message="There is no feedback"></Notification>}
    </>
  );
}

export default App;