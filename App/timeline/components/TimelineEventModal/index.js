import React from 'react';
import { View, Text, Modal, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import s from './styles';
import colors from '~/App/styles/colors';

const TimelineEventModal = ({ data, hideModal }) => {
  // Border Color is determined based off of the app
  let highlightColor;
  switch (data.appName) {
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
    <Modal transparent animationType="fade">
      <TouchableWithoutFeedback
        id="overlay"
        onPress={() => hideModal()}
      >
        <View style={s.overlay} />
      </TouchableWithoutFeedback>

      <View
        style={s.modalContainer}
        pointerEvents="box-none"
      >
        <View style={cardStyle}>
          <View style={s.appHeader}>
            <View style={iconStyle} />
            <Text id="appName" style={s.appName}>{data.appName}</Text>
            <Text id="timestamp" style={s.timestamp}>{data.timestamp}</Text>
          </View>
          <View style={s.lineBreak} />
          <Text id="body">{data.body}</Text>
        </View>
      </View>
    </Modal>
  );
};

TimelineEventModal.propTypes = {
  data: PropTypes.shape({
  	appName: PropTypes.string.isRequired,
  	timestamp: PropTypes.string.isRequired,
  	body: PropTypes.string.isRequired,
  }),
  hideModal: PropTypes.func.isRequired,
};

export default TimelineEventModal;
