// import css from './Counter';
import { useState } from 'react';
import Button from 'components/Buttons/Buttons';
import StatisticItem from 'components/Statistics/StatisticsItem';
import { ButtonWrapper, StatisticHeader } from './Counter.styled';

// const data = [{ label: 'good' }, { label: 'neutral' }, { label: 'bad' }];

export default function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtnClick = value => {
    console.log('🚀 ~ value', value);
    switch (value) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
    }
  };
  const countTotalFeedback = () => Number(good + neutral + bad);

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  return (
    <div className="Counter">
      <ButtonWrapper>
        {['good', 'neutral', 'bad'].map(label => {
          return (
            <Button
              key={label}
              title={label}
              onClick={() => handleBtnClick(label)}
            />
          );
        })}
      </ButtonWrapper>
      <StatisticHeader>Statistics</StatisticHeader>
      {countTotalFeedback() ? (
        <div>
          <ul>
            <StatisticItem
              feedbackState={{ good: good, neutral: neutral, bad: bad }}
            />
          </ul>
          <p>Total:{countTotalFeedback()}</p>
          <p>Total:{countPositiveFeedbackPercentage().toFixed(2)}%</p>
        </div>
      ) : (
        <span>No feedback given </span>
      )}
    </div>
  );
}
