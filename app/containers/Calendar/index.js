import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../components/common';

class Calendar extends Component {
  render() {
    return (
      <View>
        <Text> Hello Navigation Calendar </Text>
      </View>
    );
  }
}

Calendar.navigationOptions = {
  title: 'Calendar',
};


export default Calendar;
