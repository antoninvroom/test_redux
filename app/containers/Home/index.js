// Home
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../components/common';

class Home extends Component {

  componentWillReceiveProps() {

  }

  render() {
    return (
      <View>
        <Text> Home page </Text>
      </View>
    );
  }
}

Home.navigationOptions = {
  title: 'Home',
};

export default Home;
