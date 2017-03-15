import React, { Component } from 'react';
import { View, Text, ActivityIndicatorIOS } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import LoginButton from '../../components/Login';
import reducers from '../../reducers';
import { Card, CardSection, Button } from '../../components/common';


class Login extends Component {
    componentDidMount() {
      if(this.props.auth.loggedIn) {
        this.props.navigation.navigate('Home');
      }
    }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.loggedIn) {
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    console.log(this.props.auth);
    const { actions, auth } = this.props;
    var loginComponent = <LoginButton onLoginPressed={() => actions.login()} />;
    if(auth.error) {
      console.log("erreur");
      loginComponent = <View><LoginButton onLoginPressed={() => actions.login()} /><Text>{auth.error}</Text></View>;
    }
    if (auth.loading) {
      console.log("loading");
      loginComponent = <Text> LOL </Text>;
    }
    return(
      <View>
        <Card>
          <CardSection>
            { auth.loggedIn ? this.props.navigation.navigate('Home') : loginComponent }
          </CardSection>
        </Card>
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
