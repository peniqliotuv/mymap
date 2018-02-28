import { LoginButton } from 'cancerbase-sdk';
import React, { Component } from 'react';
import { View, Text, Image, Button, TouchableOpacity, Alert } from 'react-native';
import { AppLoading } from 'expo';
import cacheImages from '../../../utils/assetPrefetch';
import PropTypes from 'prop-types';
import styles from './styles';

class Splashscreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  state = {
    isReady: false,
  };

  onCancerBaseLogin = () => {
    this.props.navigation.navigate('Timeline');
  }

  onCancerBaseError = (err) => {
    Alert.alert('Something went wrong!');
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
        require('~/App/assets/background.jpg'),
    ]);

    return Promise.all(imageAssets);
  }

  // Empty view on top to stretch out the 'justifyContent'.
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <View style={styles.outer}>
        <View style={styles.imgWrap}>
          <Image
            style={styles.bgImg}
            source={require('~/App/assets/background.jpg')}
          />
        </View>
        <View />
        <Text style={styles.logoText}>mymap</Text>
        <View style={styles.buttonContainer}>
          <LoginButton
            scopes={[
              'cb.appData.read',
              'cb.profile',
              'cb.timeline',
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
