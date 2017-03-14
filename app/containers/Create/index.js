// Create
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../components/common';

class Create extends Component {
  render() {
    return (
      <View>
        <Text> Hello Navigation Create </Text>
      </View>
    );
  }
}

Create.navigationOptions = {
  title: 'Create',
};

export default Create;
