import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import s from './styles';
import colors from '~/App/styles/colors';

const LoginPage = (props) => {

  handleSubmit = () => {
    props.navigation.navigate('Timeline');
  }

  return (
    <View style={s.loginContainer}>
      <Text style={s.loginTitle}>MyMap</Text>
      <Text>Login with CancerBase</Text>
      <Button
        title='Login'
        style={s.loginButton}
        color={colors.purple}
        onPress={handleSubmit}>
      </Button>
    </View>
  );
};

LoginPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default LoginPage;
