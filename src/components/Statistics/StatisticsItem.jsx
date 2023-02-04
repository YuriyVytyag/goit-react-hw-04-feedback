import PropTypes from 'prop-types';
import React from 'react';

export default function StatisticItem({ feedbackState }) {
  console.log('🚀 ~ feedbackState', feedbackState);
  return Object.entries(feedbackState).map(([name, value]) => (
    <li key={name}>
      {name}:{value}
    </li>
  ));
}

StatisticItem.propTypes = {
  feedbackState: PropTypes.object.isRequired,
};
