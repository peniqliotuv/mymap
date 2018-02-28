import React, { Component } from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import cacheImages from '../../../utils/assetPrefetch';
import PropTypes from 'prop-types';
import styles from './styles';

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
                <View
                    style={styles.imgWrap}>
                    <Image
                        style={styles.bgImg}
                        source={require('~/App/assets/background.jpg')}
                    />
                </View>
                <View></View>
                <Image
                    style={styles.logoImg}
                    source={require('~/App/assets/logo-outlines.png')} />
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
