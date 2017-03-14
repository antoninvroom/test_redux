// Home
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../components/common';

class Home extends Component {


  render() {
    const {state} = this.props.navigation;
    return (
      <View>
        <Text> {state.params.coucou} </Text>
      </View>
    );
  }
}

Home.navigationOptions = {
  title: 'Home',
};

export default Home;
