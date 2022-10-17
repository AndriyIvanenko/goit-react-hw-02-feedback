import PropTypes from 'prop-types';
import { StatsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <StatsItem>
        <span>Good:&nbsp;&nbsp;</span>
        <span>{good}</span>
      </StatsItem>
      <StatsItem>
        <span>Neutral:&nbsp;&nbsp;</span>
        <span>{neutral}</span>
      </StatsItem>
      <StatsItem>
        <span>Bad:&nbsp;&nbsp;</span>
        <span>{bad}</span>
      </StatsItem>
      <StatsItem>
        <span>Total:&nbsp;&nbsp;</span>
        <span>{total}</span>
      </StatsItem>
      <StatsItem>
        <span>Positive feedback:&nbsp;&nbsp;</span>
        <span>{positivePercentage}%</span>
      </StatsItem>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
