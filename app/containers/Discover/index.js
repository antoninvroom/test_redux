// Discover
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../components/common';

class Discover extends Component {
  render() {
    return (
      <View>
        <Text> Hello Navigation Discover </Text>
      </View>
    );
  }
}

Discover.navigationOptions = {
  title: 'Discover',
};

export default Discover;
