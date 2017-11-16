import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import s from './styles';

const TimelineEvent = ({ appName, timestamp, body }) => {
  return (
    <View style={s.container}>
      <View style={s.date}>
        <Text style={{'textAlign': 'center'}}>{timestamp}</Text>
      </View>
      <View style={s.card}>
        <Text style={s.appName}>{appName}</Text>
        <View style={s.lineBreak} />
        <Text numberOfLines={5}>{body}</Text>
      </View>
    </View>
  );
};


TimelineEvent.propTypes = {
  appName: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default TimelineEvent;

