import { LoginButton } from 'cancerbase-sdk';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, Alert, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { AppLoading } from 'expo';
import cacheImages from '../../../utils/assetPrefetch';
import styles from './styles';
import { fetchNotificationSubscriptions } from '../../../settings/actions';

class Splashscreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    fetchNotificationSubscriptions: PropTypes.func.isRequired,
  };

  state = {
    isReady: false,
    isLoggedIn: false,
  };

  async componentWillMount() {
    try {
      const date = await AsyncStorage.getItem('loggedInDate');
      console.log('DATE:');
      console.log(date);
      if (date !== null) {
        console.log('NAVIGATING TO TIMELINE');
        // this.props.navigation.navigate('Timeline');
      }
    }
    catch (e) {
      console.error('Error retrieving from AsyncStorage');
    }
  }

  scopes = ['cb.appData.read', 'cb.profile', 'cb.timeline'];

  onCancerBaseLogin = () => {
    AsyncStorage.setItem('loggedInDate', new Date().toString()).then(() => {
      this.props.fetchNotificationSubscriptions();
      this.props.navigation.navigate('Timeline');
    });
  };

  onCancerBaseError = (err) => {
    Alert.alert('Something went wrong!');
  };

  _loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      require('~/App/assets/background.jpg'),
      require('~/App/assets/logo-outlines.png'),
    ]);
    return Promise.all(imageAssets);
  };
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
          source={require('~/App/assets/logo-outlines.png')}
        />
        <View style={styles.buttonContainer}>
          <LoginButton
            scopes={this.scopes}
            onLogin={this.onCancerBaseLogin}
            onError={this.onCancerBaseError}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    notifications: state.settings.notifications,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNotificationSubscriptions: () =>
      dispatch(fetchNotificationSubscriptions()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splashscreen);
