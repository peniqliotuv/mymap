import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { NavigationActions } from 'react-navigation';
import TextInputItem from '../../components/TextInputItem';

class EditProfilePage extends Component {

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

    save = () => {
        // TODO: save the profile.
    }

    render() {
        const user = {
          name: 'Jane Doe',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/03/03/18/58/girl-657753_1280.jpg',
          welcomeMessage: 'hello',
        };
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
                    <TouchableOpacity
                        title='Save'
                        onPress={this.save}
                        style={styles.alignRight}
                    >
                        <Text style={styles.buttonText}>save</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.mid}>
                    <Image
                        source={{ uri: user.imageUrl }}
                        style={styles.userImage}
                    />
                    <View>
                        <Text style={styles.buttonText}>display name</Text>
                        <TextInputItem text={user.name}/>
                    </View>
                    <View>
                        <Text style={styles.buttonText}>welcome message</Text>
                        <TextInputItem text={user.welcomeMessage}/>
                    </View>
                </View>
                <View style={styles.bottom}>

                </View>
            </View>
        );
    }
}

export default EditProfilePage;
