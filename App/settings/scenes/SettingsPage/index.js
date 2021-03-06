import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import CancerBaseSDK from 'cancerbase-sdk';
import styles from './styles';

class SettingsPage extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  componentWillMount() {
    // Preload to attempt speeding up image loading
    this.leftArrow = (
      <Image
        style={styles.icon}
        source={require('../../../assets/arrowLeft-small.png')}
      />
    );
    this.rightArrow = (
      <Image
        style={[styles.icon, styles.alignRight]}
        source={require('../../../assets/arrowRight-small.png')}
      />
    );
    this.profile = (
      <Image
        style={[styles.icon, styles.menuIcon]}
        source={require('../../../assets/profile-small.png')}
      />
    );
    this.notifications = (
      <Image
        style={[styles.icon, styles.menuIcon]}
        source={require('../../../assets/notifications-small.png')}
      />
    );
  }

  goback = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  gotoEditProfile = () => {
    this.props.navigation.navigate('EditProfile');
  };

  gotoEditNotifications = () => {
    this.props.navigation.navigate('NotificationsPage');
  };

  signOut = () => {
    AsyncStorage.removeItem('loggedInDate').then(() => {
      CancerBaseSDK.user.clearData();
      /* Clear the navigation stack */
      this.props.navigation.dispatch(NavigationActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: 'Splash' })],
      }));
    });
  };

  render() {
    return (
      <View style={styles.outer}>
        <View style={styles.top}>
          <TouchableOpacity
            title="Settings"
            onPress={this.goback}
            style={styles.alignLeft}
          >
            {this.leftArrow}
          </TouchableOpacity>
          <Text style={[styles.buttonText]}>settings</Text>
        </View>
        <View style={styles.mid}>
          <TouchableOpacity
            title="Edit profile"
            onPress={this.gotoEditProfile}
            style={styles.menuItem}
          >
            {this.profile}
            <Text style={styles.buttonText}>edit profile</Text>
            {this.rightArrow}
          </TouchableOpacity>
          <TouchableOpacity
            title="Edit notification"
            onPress={this.gotoEditNotifications}
            style={styles.menuItem}
          >
            {this.notifications}
            <Text style={styles.buttonText}>edit notifications</Text>
            {this.rightArrow}
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            title="Log out"
            onPress={this.signOut}
            style={styles.boxButton}
          >
            <Text style={styles.buttonText}>sign out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SettingsPage;
