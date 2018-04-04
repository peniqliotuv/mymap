import { LoginButton } from 'cancerbase-sdk';
import React, { Component } from 'react';
import { View, Text, Image, Alert, Button } from 'react-native';
import PropTypes from 'prop-types';
import { AppLoading } from 'expo';
import cacheImages from '../../../utils/assetPrefetch';
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
        require('~/App/assets/logo-outlines.png'),
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
        <Image
            style={styles.logoImg}
            source={require('~/App/assets/logo-outlines.png')} />
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
