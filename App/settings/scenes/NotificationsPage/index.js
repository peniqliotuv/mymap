import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { connect } from 'react-redux';
import { setPreference } from '../../../timeline/actions';
import { NavigationActions } from 'react-navigation';

class NotificationsPage extends Component {

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    setPreference: PropTypes.func.isRequired,
  }

  componentWillMount() {
    // Preload to attempt speeding up image loading
    this.leftArrow = (<Image style={styles.icon} source={require('../../../assets/arrowLeft-small.png')} />);
    this.blueTick = (<Image style={[styles.tick, styles.alignRight]} source={require('../../../assets/tick-blue.png')} />);
    this.greyTick = (<Image style={[styles.tick, styles.alignRight]} source={require('../../../assets/tick-grey.png')} />);
  }

  componentDidMount() { 
    // Read from AsyncStorage
    AsyncStorage.getItem('all new events').then((value) => {
      if (value === 'true') {
        this.props.setPreference('all new events');
      }
    }).done();
    AsyncStorage.getItem('account updates').then((value) => {
      console.log("value: " + value);
      if (value === 'true') {
        this.props.setPreference('account updates');
      }
    }).done();
  } 

  goback = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  }

  save = (obj, types) => {
    // Save to AsyncStorage
    types.forEach(item => {
      if (obj.notifications.includes(item.name)) {
        AsyncStorage.setItem(item.name, 'true');
      }
      else {
        AsyncStorage.setItem(item.name, 'false');
      }
    });
  }

  signOut = () => {
    // TODO: sign out
  }

  selectedType = (obj, types) => {
    const selectedTypes = types.slice();
    selectedTypes.forEach(item => {
      if (obj.notifications.includes(item.name)) {
        item.selected = true;
      }
    });
    return selectedTypes;
  } 

  render() {
    const settings = [
      {
        name: 'all new events',
        selected: false,
      },
      {
        name: 'account updates',
        selected: false,
      },
    ];

    const { notifications } = this.props;
    const types = this.selectedType(notifications, settings);

    return (
      <View style={styles.outer}>
        <View style={styles.top}>
          <TouchableOpacity
            title='Notifications'
            onPress={this.goback}
            style={styles.alignLeft}
          >
            { this.leftArrow }
          </TouchableOpacity>
          <Text style={[styles.buttonText]}>edit notifications</Text>
          <TouchableOpacity
            title='save'
            onPress={() => this.save(notifications, settings)}
            style={styles.alignRight}
          >
            <Text style={[styles.buttonText]}>save</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mid}>
          <Text style={[styles.buttonText]}>notify me about...</Text>
          {types.map((item, index) => {
            return (
              <TouchableOpacity
                title={item.name}
                onPress={() => this.props.setPreference(item.name)}
                style={styles.menuItem}
                key={index}
              >
                <Text style={styles.menuText}>{item.name}</Text>
                { item.selected ? this.blueTick : this.greyTick}
              </TouchableOpacity>
            )
          })}
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            title='Log out'
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

function mapStateToProps(state) {
  const { notifications } = state.timeline;
  return {
    notifications: { notifications },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPreference: (settingType) => dispatch(setPreference(settingType)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsPage);

