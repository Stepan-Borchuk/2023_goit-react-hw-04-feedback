import { Box } from '../Box';
import { ItemsText, TotalResults, Items } from './Statistics.styled';

const Statistics = ({ statsArray, good, total }) => {
  return (
    <Box
      display="inline-flex"
      alightItems="start"
      flexDirection="column"
      width="100%"
      mb={5}
    >
      <Box as="ul" p={0}>
        {statsArray.map(item => (
          <Items key={item[0]}>
            <ItemsText>
              {item[0]}: {item[1]}
            </ItemsText>
          </Items>
        ))}
      </Box>
      <TotalResults>Total: {total}</TotalResults>
      <TotalResults value={good}> Positive Feedback: {good}%</TotalResults>
    </Box>
  );
};

export default Statistics