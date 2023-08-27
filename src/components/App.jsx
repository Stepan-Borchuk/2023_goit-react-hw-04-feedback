import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Box } from './Box';
import FeedbackOptions from './Buttons';
import Statistics from './Statistic';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = value => {
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedback = () => {
    const total = this.totalFeedback();
    const { good } = this.state;
    return total !== 0 ? Math.round((good * 100) / total) : 0;
  };

  render() {
    const buttonsArray = Object.keys(this.state);
    const statsArray = Object.entries(this.state);
    const total = this.totalFeedback();
    const value = this.positiveFeedback();
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
            onLeaveFeedback={this.handleFeedback}
          />

          <Box as="section" display="flex" flexDirection="column" width="100%">
            <h2>Статистика</h2>
            {total === 0 ? (
              <h3>No feedback given</h3>
            ) : (
              <Statistics total={total} good={value} statsArray={statsArray} />
            )}
          </Box>
        </Box>
      </Box>
    );
  }
}

export default App;
