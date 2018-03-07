import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import s from './styles';

const ParallaxHeader = ({ user }) => {
  return (
    <View style={s.container}>
      <View style={s.middle}>
        <Image
          style={s.image}
          source={{ uri: user.imageUrl }}
        />
        <Text style={s.name}>{ user.name }</Text>
      </View>

      <View style={s.bottom} />
    </View>
  );
};

ParallaxHeader.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default ParallaxHeader;
