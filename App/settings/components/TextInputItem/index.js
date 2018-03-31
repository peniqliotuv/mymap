import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';
import styles from './styles';

class TextInputItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        text: this.props.text,
    };
  }

  componentWillReceiveProps(props) {
      // update original states
      this.setState({
        text: props.text,
      });
  }

  render() {
    return (
      <TextInput
        style={styles.textEdit}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

export default TextInputItem
