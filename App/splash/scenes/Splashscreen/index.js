import { LoginButton } from 'cancerbase-sdk';
import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class Splashscreen extends Component {

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  onCancerBaseLogin = () => {
    this.props.navigation.navigate('Timeline');
  }

  onCancerBaseError = (err) => {
    Alert.alert('Something went wrong!');
  }

  // Empty view on top to stretch out the 'justifyContent'.
  render() {
    return (
      <View style={styles.outer}>
          <View></View>
          <Text style={styles.logoText}>mymap</Text>
          <View style={styles.buttonContainer}>
            <LoginButton
            scopes={[
              'cb.appData.read',
              'cb.profile',
              'cb.timeline'
            ]}
            onLogin={this.onCancerBaseLogin}
            onError={this.onCancerBaseError}
            />
          </View>
      </View>

    );
  }
}

export default Splashscreen;
