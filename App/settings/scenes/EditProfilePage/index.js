import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { NavigationActions } from 'react-navigation';
import TextInputItem from '../../components/TextInputItem';
import { ImagePicker } from 'expo';


class EditProfilePage extends Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired,
    }

    state = {
        image: 'https://cdn.pixabay.com/photo/2015/03/03/18/58/girl-657753_1280.jpg',
        userDisplayName: 'name',
        welcomeMessage: 'welcome',
    }

    componentWillMount() {
      // Preload to attempt speeding up image loading
      this.leftArrow = (<Image style={styles.icon} source={require('../../../assets/arrowLeft-small.png')} />);
      this.camera = (<Image style={[styles.icon, styles.cameraButton]} source={require('../../../assets/camera.png')} />);
    }

    goback = () => {
        this.props.navigation.dispatch(NavigationActions.back());
    }

    save = () => {
        // TODO: save the profile.
    }

    onChangeDisplayName = (text) => {
        this.state.userDisplayName = text;
    }

    onChangeWelcomeMessage = (text) => {
        this.state.welcomeMessage = text;
    }

    showImagePicker = async () => {
        var options = {

        };
        let result = await Expo.ImagePicker.launchImageLibraryAsync(options);
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
    }

    render() {

        const user = {
          name: 'Jane Doe',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/03/03/18/58/girl-657753_1280.jpg',
          welcomeMessage: 'hello',
      };
      let { image } = this.state;

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
                    <Text style={[styles.buttonText, ]}>edit profile</Text>
                    <TouchableOpacity
                        title='Save'
                        onPress={this.save}
                        style={[styles.alignRight, styles.saveButton]}
                    >
                        <Text style={styles.buttonText}>save</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.mid}>
                    <TouchableOpacity
                        title='ImagePicker'
                        onPress={this.showImagePicker}
                        style={this.imageContainer}
                        >
                        { image &&
                            <Image
                                source={{ uri: image }}
                                style={styles.userImage}
                            />
                        }
                        { this.camera }
                    </TouchableOpacity>
                    <TextInputItem
                        label='display name'
                        text={this.state.userDisplayName}
                        onChangeText={this.onChangeDisplayName}
                    />
                    <TextInputItem
                        label='welcome message'
                        text={this.state.welcomeMessage}
                        onChangeText={this.onChangeWelcomeMessage}
                    />

                </View>
                <View style={styles.bottom}>

                </View>
            </View>
        );
    }
}

export default EditProfilePage;
