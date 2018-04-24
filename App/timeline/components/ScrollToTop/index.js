import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import s from './styles';

const ScrollToTop = ({ handlePress }) => {
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.button} onPress={handlePress}>
        <Text style={s.buttonText}>more recent</Text>
      </TouchableOpacity>
    </View>
  );
};

ScrollToTop.propTypes = {
  handlePress: PropTypes.func.isRequired,
};

export default ScrollToTop;
