import React from 'react';
import { View, Text, Image } from 'react-native';
import s from './styles';

const TimelineHeader = () => {
  return (
    <View style={s.header}>
      <Image style={s.image} source={require('~/App/assets/menu-placeholder.png')} />
    	<Text style={s.headerText}> mymap </Text>
      <Image style={s.image} source={require('~/App/assets/gear-resized.png')}/>
    </View>
  );
};

export default TimelineHeader;
