import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { NavigationActions } from 'react-navigation';

class SettingsPage extends Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired,
    }

    componentWillMount() {
      // Preload to attempt speeding up image loading
      this.leftArrow = (<Image style={styles.icon} source={require('../../../assets/arrowLeft-small.png')} />);
      this.rightArrow = (<Image style={[styles.icon, styles.alignRight]} source={require('../../../assets/arrowRight-small.png')} />);
      this.profile = (<Image style={[styles.icon, styles.menuIcon]} source={require('../../../assets/profile-small.png')}/>);
      this.notifications = (<Image style={[styles.icon, styles.menuIcon]} source={require('../../../assets/notifications-small.png')}/>);
    }

    goback = () => {
        this.props.navigation.dispatch(NavigationActions.back());
    }

    gotoEditProfile = () => {
        // TODO: navigate to Edit Profile
    }

    gotoEditNotifications = () => {
        this.props.navigation.navigate('NotificationsPage');
    }

    signOut = () => {
        // TODO: sign out
    }

    render() {
        return (
            <View style={styles.outer}>
                <View style={styles.top}>
                    <TouchableOpacity
                        title='Settings'
                        onPress={this.goback}
                        style={styles.alignLeft}
                    >
                        { this.leftArrow }
                    </TouchableOpacity>
                    <Text style={[styles.buttonText, ]}>settings</Text>
                </View>
                <View style={styles.mid}>
                    <TouchableOpacity
                        title='Edit profile'
                        onPress={this.gotoEditProfile}
                        style={styles.menuItem}
                    >
                        { this.profile }
                        <Text style={styles.buttonText}>edit profile</Text>
                        { this.rightArrow }
                    </TouchableOpacity>
                    <TouchableOpacity
                        title='Edit notification'
                        onPress={this.gotoEditNotifications}
                        style={styles.menuItem}
                    >
                        { this.notifications }
                        <Text style={styles.buttonText}>edit notifications</Text>
                        { this.rightArrow }
                    </TouchableOpacity>
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

export default SettingsPage;

