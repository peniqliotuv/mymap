import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, Text } from 'react-native';
import styles from './styles';

class TextInputItem extends Component {
  static propTypes = {
    text: PropTypes.string,
    label: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,
  };

  state = {
    text: this.props.text,
    label: this.props.label,
  };

  componentWillReceiveProps(props) {
    // update original states
    this.setState({
      text: props.text,
    });
  }

  onChangeText = (text) => {
    this.setState({ text });
    this.props.onChangeText({ text });
  };

  render() {
    return (
      <View style={styles.outer}>
        <Text style={styles.label}>{this.state.label}</Text>
        <TextInput
          style={styles.textEdit}
          onChangeText={this.onChangeText}
          value={this.state.text}
        />
      </View>
    );
  }
}

export default TextInputItem;
