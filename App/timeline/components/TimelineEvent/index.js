import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import s from './styles';
import colors from '~/App/styles/colors';

const TimelineEvent = ({ appName, timestamp, body, handleTimelineEventPress }) => {
  // Border Color is determined based off of the app
  let highlightColor;
  switch (appName) {
    case 'side effect':
      highlightColor = colors.sideEffectGreen;
      break;
    case 'medmind':
      highlightColor = colors.medMindBlue;
      break;
    case 'infusion':
      highlightColor = colors.infusionYellow;
      break;
    default:
      highlightColor = colors.purple;
  }

  const cardStyle = StyleSheet.flatten([s.card, { borderColor: highlightColor }]);
  const iconStyle = StyleSheet.flatten([s.appIcon, { backgroundColor: highlightColor }]);

  return (
    <TouchableOpacity style={s.container} onPress={() => handleTimelineEventPress({ appName, timestamp, body })}>
      <View style={s.dateContainer}>
        <Text style={s.date}>{timestamp}</Text>
      </View>
      <View style={cardStyle}>
        <View style={s.appHeader}>
          <View style={iconStyle} />
          <Text style={s.appName}>{appName}</Text>
        </View>
        <View style={s.lineBreak} />
        <Text numberOfLines={5}>{body}</Text>
      </View>
    </TouchableOpacity>
  );
};

TimelineEvent.propTypes = {
  appName: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleTimelineEventPress: PropTypes.func.isRequired,
};

export default TimelineEvent;
