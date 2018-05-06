import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  AlertIOS,
  AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { fetchNotificationSubscriptions } from '../../actions';
import { defaultNotifications } from '../../../utils/constants';

class NotificationsPage extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    notifications: PropTypes.array.isRequired,
    fetchNotificationSubscriptions: PropTypes.func.isRequired,
  };

  state = {
    selectedNotifs: this.props.notifications,
  };

  componentWillMount() {
    // Preload to attempt speeding up image loading
    this.leftArrow = (
      <Image
        style={styles.icon}
        source={require('../../../assets/arrowLeft-small.png')}
      />
    );
    this.blueTick = (
      <Image
        style={[styles.tick, styles.alignRight]}
        source={require('../../../assets/tick-blue.png')}
      />
    );
    this.greyTick = (
      <Image
        style={[styles.tick, styles.alignRight]}
        source={require('../../../assets/tick-grey.png')}
      />
    );
  }

  componentDidMount() {
    this.props.fetchNotificationSubscriptions();
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.state.selectedNotifs, nextProps.notifications)) {
      this.setState({ selectedNotifs: nextProps.notifications });
    }
  }

  getPreferences = () => {
    const { selectedNotifs } = this.state;
    const preferences = defaultNotifications.map((notif) => {
      const selected = selectedNotifs.includes(notif);
      return {
        name: notif,
        selected,
      };
    });
    return preferences;
  };

  goback = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  save = () => {
    // Save to AsyncStorage
    const { selectedNotifs } = this.state;
    return Promise.all(defaultNotifications.map((item) => {
      const value = selectedNotifs.includes(item);
      return AsyncStorage.setItem(item, value.toString());
    }));
  };

  togglePreference = (item) => {
    let selectedNotifs;
    if (this.state.selectedNotifs.includes(item)) {
      selectedNotifs = this.state.selectedNotifs.filter((notif) => notif !== item);
    }
    else {
      selectedNotifs = [...this.state.selectedNotifs];
      selectedNotifs.push(item);
    }
    this.setState({ selectedNotifs });
  };

  render() {
    const preferences = this.getPreferences();
    return (
      <View style={styles.outer}>
        <View style={styles.top}>
          <TouchableOpacity
            title="Notifications"
            onPress={this.goback}
            style={styles.alignLeft}
          >
            {this.leftArrow}
          </TouchableOpacity>
          <Text style={[styles.buttonText]}>edit notifications</Text>
          <TouchableOpacity
            title="save"
            onPress={() =>
              this.save().then(() => AlertIOS.alert('Preferences Saved'))
            }
            style={styles.alignRight}
          >
            <Text style={[styles.buttonText]}>save</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mid}>
          <Text style={[styles.buttonText]}>notify me about...</Text>
          {preferences.map((item, index) => {
            return (
              <TouchableOpacity
                title={item.name}
                onPress={() => this.togglePreference(item.name)}
                style={styles.menuItem}
                key={index}
              >
                <Text style={styles.menuText}>{item.name}</Text>
                {item.selected ? this.blueTick : this.greyTick}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { notifications } = state.settings;
  return { notifications };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNotificationSubscriptions: () =>
      dispatch(fetchNotificationSubscriptions()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsPage);
