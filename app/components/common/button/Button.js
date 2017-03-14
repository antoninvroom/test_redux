import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle} >
            <Text style={styles.buttonText} > {props.children} </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#F97878',
        borderRadius: 2,
        marginLeft: 5,
        marginRight: 5
    },
    buttonText: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    }
};

export { Button };
