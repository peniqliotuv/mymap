import React, { Component } from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { AppLoading, Asset } from 'expo';
import PropTypes from 'prop-types';
import styles from './styles';

function cacheImages(images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

class Splashscreen extends Component {

    state = {
        isReady: false,
    };

    static propTypes = {
        navigation: PropTypes.object.isRequired,
    }

    signIn = () => {
      this.props.navigation.navigate('Timeline');
    }

    signUp = () => {
        this.props.navigation.navigate('Timeline');
    }

    async _loadAssetsAsync() {
        const imageAssets = cacheImages([
            require('~/App/assets/background.jpg'),
        ]);
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
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}>
                    <Image
                        style={{
                            flex: 1,
                            resizeMode: 'stretch',
                        }}
                        source={require('~/App/assets/background.jpg')}
                    />
                </View>
                <View></View>
                <Text style={styles.logoText}>mymap</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        title='SIGN IN'
                        onPress={this.signIn}
                        style={[styles.boxButton, {marginBottom: 19}]}
                    >
                        <Text style={styles.buttonText}>SIGN IN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        title='SIGN UP'
                        onPress={this.signUp}
                        style={styles.boxButton}
                    >
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Splashscreen;
