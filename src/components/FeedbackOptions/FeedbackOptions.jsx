import PropTypes from 'prop-types';
import { FeedbackControls, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  options: { good, neutral, bad },
  onLeaveFeedback: { onGoodClick, onNeutralClick, onBadClick },
}) => {
  return (
    <FeedbackControls>
      <FeedbackButton type="button" onClick={onGoodClick}>
        {good}
      </FeedbackButton>
      <FeedbackButton type="button" onClick={onNeutralClick}>
        {neutral}
      </FeedbackButton>
      <FeedbackButton type="button" onClick={onBadClick}>
        {bad}
      </FeedbackButton>
    </FeedbackControls>
  );
};

FeedbackOptions.propTypes = {
  onGoodClick: PropTypes.func,
  onNeutralClick: PropTypes.func,
  onBadClick: PropTypes.func,
};
