import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import s from './styles';
import colors from '~/App/styles/colors';
//import TimelineList from '../../scenes/Timeline'

const onPress = () => {
	//TimelineList.parallaxScrollView.scrollTo({x:0, y:0, animated: true});
};

const ScrollToTop = () => {
  return (
  	<View style={s.container} >
  		<TouchableOpacity style={s.button} onPress={onPress}>
  			<Text style={s.buttonText}>
  				more recent
  			</Text>
  		</TouchableOpacity>
	</View>
  );
};

export default ScrollToTop;