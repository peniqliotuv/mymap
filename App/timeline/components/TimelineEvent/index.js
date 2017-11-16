import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import s from './styles';
import colors from '~/App/styles/colors';

const TimelineEvent = ({ appName, timestamp, body }) => {

  // Border Color is determined based off of the app
  let borderColor;
  switch (appName) {
    case 'side effect':
      borderColor = colors.sideEffectGreen;
      break;
    case 'medmind':
      borderColor = colors.medMindBlue;
      break;
    case 'infusion':
      borderColor = colors.infusionYellow;
      break;
    default:
      borderColor= colors.purple;
  }

  const cardStyle = StyleSheet.flatten([s.card, { borderColor }]);
  console.log(cardStyle)
  return (
    <View style={s.container}>
      <View style={s.date}>
        <Text style={{'textAlign': 'center'}}>{timestamp}</Text>
      </View>
      <View style={cardStyle}>
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
