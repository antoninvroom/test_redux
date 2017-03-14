import React, { Component } from 'react';
import { View, text, ActivityIndicatorIOS } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import LoginButton from '../../components/Login';
import reducers from '../../reducers';
import { Card, CardSection, Button } from '../../components/common';


class Login extends Component {
  render() {
    console.log(this.props.auth);
    const { actions, auth } = this.props;
    let loginComponent = <Login onLoginPressed={() => actions.login()} />;
    if(auth.error) {
      loginComponent = <View><Login onLoginPressed={() => actions.login()} /><Text>{auth.error}</Text></View>;
    }
    if (auth.loading) {
      loginComponent = <ActivityIndicatorIOS size="large" color="#3b5998" />;
    }
    return(
      <View>
        { auth.loggedIn ? this.props.navigation.navigate('Home') : loginComponent }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
