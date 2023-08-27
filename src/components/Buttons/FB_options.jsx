
import { Box } from '../Box';
import { Buttons } from './Buttons.styled';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <Box
      m={0}
      p={0}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      as="ul"
      background="accent"
    >
      {options.map(button => (
        <li key={button}>
          <Buttons type="button" onClick={() => onLeaveFeedback(button)}>
            {button}
          </Buttons>
        </li>
      ))}
    </Box>
  );
};

export default FeedbackOptions
