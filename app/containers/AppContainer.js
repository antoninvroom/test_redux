import React, { Component } from 'react';
import Home from './Home';
import Calendar from './Calendar';
import Create from './Create';
import Discover from './Discover';
import Profil from './Profil';
import Login from './Login';
import { StackNavigator, TabNavigator } from 'react-navigation';

const AppContainer = TabNavigator({
  Home: { screen: Home },
  Calendar: { screen: Calendar },
  Create: { screen: Create },
  Discover: { screen: Discover },
  Profil: { screen: Profil },
});

const appNavigation = StackNavigator({
  Login: { screen: Login },
  Home: { screen: AppContainer }
})

export default appNavigation;
