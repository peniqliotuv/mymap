import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class Splashscreen extends Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired,
    }

    signIn = () => {
      this.props.navigation.navigate('Timeline');
    }

    signUp = () => {
        this.props.navigation.navigate('Timeline');
    }

    // Empty view on top to stretch out the 'justifyContent'.
    render() {
        return (
            <View style={styles.outer}>
                <View></View>
                <Image style={styles.logo} source={require('~/App/assets/logo-outlines.png')} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        title='SIGN IN'
                        onPress={this.signIn}
                        style={[styles.boxButton, {marginBottom: 19}]}
                    >
                        <Text style={styles.buttonText}>sign in</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        title='SIGN UP'
                        onPress={this.signUp}
                        style={styles.boxButton}
                    >
                        <Text style={styles.buttonText}>sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Splashscreen;
