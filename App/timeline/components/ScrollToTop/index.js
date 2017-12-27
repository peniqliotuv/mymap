import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import s from './styles';
import colors from '~/App/styles/colors';

const ScrollToTop = ({ handlePress, isFixed }) => {
  let containerStyle = s.container;
  if (isFixed) {
    console.log('ScrollToTop is fixed');
    containerStyle = StyleSheet.flatten([
      s.container,
      {
        position: 'absolute',
        top: 155,
      },
    ]);
  }


  return (
  	<View style={containerStyle} >
  		<TouchableOpacity style={s.button} onPress={handlePress}>
  			<Text style={s.buttonText}>
  				more recent
  			</Text>
  		</TouchableOpacity>
	</View>
  );
};

ScrollToTop.propTypes = {
  handlePress: PropTypes.func.isRequired,
  isFixed: PropTypes.bool.isRequired,
};

export default ScrollToTop;
