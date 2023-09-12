import { useState } from 'react';
// import PropTypes from 'prop-types';
import { Box } from './Box';
import FeedbackOptions from './Buttons';
import Statistics from './Statistic';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const total = good + neutral + bad;

  const positiveFeedback = () => {
    return total !== 0 ? Math.round((good * 100) / total) : 0;
  };

  const buttonsArray = ['good', 'neutral', 'bad'];

  const statsArray = [
    ['good', good],
    ['neutral', neutral],
    ['bad', bad],
  ];

  return (
    <Box
      as="div"
      width="30%"
      display="flex"
      alignItems="center"
      justifyContent="left"
      flexDirection="column"
      color="accent"
      ml="auto"
      mr="auto"
      bg="background"
      borderRadius="normal"
      boxShadow="4px 11px 49px 1px #d7dead"
    >
      <Box as="section">
        <Box font-size="l" display="flex" as="h1">
          Будь-ласка залиште коментар
        </Box>
        <FeedbackOptions
          options={buttonsArray}
          onLeaveFeedback={handleFeedback}
        />

        <Box as="section" display="flex" flexDirection="column" width="100%">
          <h2>Статистика</h2>
          {total === 0 ? (
            <h3>No feedback given</h3>
          ) : (
            <Statistics
              total={total}
              good={positiveFeedback()}
              statsArray={statsArray}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default App;
