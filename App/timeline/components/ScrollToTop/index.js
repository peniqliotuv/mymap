import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import s from './styles';

const ScrollToTop = ({ text, handlePress }) => {
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.button} onPress={handlePress}>
        <Text style={s.buttonText}>
          { text }
        </Text>
      </TouchableOpacity>
    </View>
  );
};

ScrollToTop.propTypes = {
  handlePress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default ScrollToTop;
