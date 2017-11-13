import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import s from './styles';

const TimelineEvent = ({ appName, timestamp, body }) => {
  return (
    <View>
      <Text>{appName}</Text>
      <Text>{timestamp}</Text>
      <Text>{body}</Text>
    </View>
  );
};


TimelineEvent.propTypes = {
  appName: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default TimelineEvent;

