import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import s from './styles';

const TimelineHeader = ({ onPress }) => {
  return (
    <View style={s.header}>
      <TouchableHighlight onPress={onPress}>
        <Image
          style={s.image}
          source={require('../../../assets/menu-placeholder.png')}
        />
      </TouchableHighlight>
      <Text style={s.headerText}> mymap </Text>
      <Image
        style={s.image}
        source={require('../../../assets/gear-resized.png')}
      />
    </View>
  );
};

TimelineHeader.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default TimelineHeader;
