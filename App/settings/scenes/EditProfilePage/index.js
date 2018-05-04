import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { ImagePicker } from 'expo';
import { connect } from 'react-redux';
import TextInputItem from '../../components/TextInputItem';
import { updateProfilePicture } from '../../../timeline/actions';
import styles from './styles';

class EditProfilePage extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    updateProfilePicture: PropTypes.func.isRequired,
  };

  state = {
    image:
      'https://cdn.pixabay.com/photo/2015/03/03/18/58/girl-657753_1280.jpg',
    userDisplayName: 'name',
    // welcomeMessage: 'welcome',
  };

  componentWillMount() {
    // Preload to attempt speeding up image loading
    this.leftArrow = (
      <Image
        style={styles.icon}
        source={require('../../../assets/arrowLeft-small.png')}
      />
    );
    this.camera = (
      <Image
        style={[styles.icon, styles.cameraButton]}
        source={require('../../../assets/camera.png')}
      />
    );
  }

  goback = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  save = () => {
    // TODO: save the profile.
  };

  onChangeDisplayName = (text) => {
    this.setState({ userDisplayName: text });
  };

  showImagePicker = async () => {
    const options = { base64: true };
    const result = await Expo.ImagePicker.launchImageLibraryAsync(options);
    if (!result.cancelled) {
      this.setState({ image: result.uri });
      const base64Img = `data:image/jpg;base64,${result.base64}`;
      this.props.updateProfilePicture(base64Img);
    }
  };

  render() {
    const { image } = this.state;

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
          <Text style={[styles.buttonText]}>edit profile</Text>
          <TouchableOpacity
            title="Save"
            onPress={this.save}
            style={[styles.alignRight, styles.saveButton]}
          >
            <Text style={styles.buttonText}>save</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mid}>
          <TouchableOpacity
            title="ImagePicker"
            onPress={this.showImagePicker}
            style={this.imageContainer}
          >
            {image && (
              <Image source={{ uri: image }} style={styles.userImage} />
            )}
            {this.camera}
          </TouchableOpacity>
          <TextInputItem
            label="display name"
            text={this.state.userDisplayName}
            onChangeText={this.onChangeDisplayName}
          />
        </View>
        <View style={styles.bottom} />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateProfilePicture: (base64Img) =>
      dispatch(updateProfilePicture(base64Img)),
  };
}

export default connect(null, mapDispatchToProps)(EditProfilePage);
