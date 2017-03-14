// Profil
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../components/common';
import { facebookLogin } from '../../actions';

class Profil extends Component {

  render() {
    return (
      <View>
        <Text> Profil </Text>
      </View>
    );
  }
}

Profil.navigationOptions = {
  title: 'Profil',
};

export default Profil;
