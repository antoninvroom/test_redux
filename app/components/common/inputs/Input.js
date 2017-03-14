import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
    const { labelStyle, inputStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}> {props.label} </Text>
            <TextInput 
                placeholder={props.placeholder}
                style={inputStyle} 
                value={props.value} 
                onChangeText={props.onChangeText} 
                autoCorrect={false} 
                secureTextEntry={props.security}
            />
        </View>
    );
};

const styles = {
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        color: '#777'
    },
    inputStyle: {
        color: '#777',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export { Input };
