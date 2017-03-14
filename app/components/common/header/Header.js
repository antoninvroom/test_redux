import React from 'react';
import {
    Text,
    View
} from 'react-native';

// Create header component
const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}> {props.headerText} </Text>
        </View>
    );
};

// Styling header
const styles = {
  viewStyle: {
      backgroundColor: '#e6e6e6',
      justifyContent: 'center',
      alignItems: 'center',
      height: 75,
      paddingTop: 15,
      shadowColor: '#777',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      elevation: 2,
      position: 'relative'
  },  
  textStyle: {
    fontSize: 22,
    color: '#333333'
  }
};

// export header component
export { Header };
