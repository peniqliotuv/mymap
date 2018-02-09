import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
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
