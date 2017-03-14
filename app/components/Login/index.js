import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from '../common';




class LoginButton extends Component {
  render() {
    return(
        <Button onPress={this.props.onLoginPressed}> Login with facebook </Button>
    );
  }
}


export default LoginButton;
