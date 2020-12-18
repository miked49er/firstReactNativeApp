import React from 'react';
import PropTypes from 'prop-types';
import { StyleProp, StyleSheet, TextInput, TextInputProps, TextStyle } from 'react-native';

interface IInputProps extends TextInputProps {
    style?: StyleProp<TextStyle>;
}

const Input = (props: IInputProps) => {
    return (
        <TextInput
            {...props}
            style={[styles.input, props.style]}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
});

Input.propTypes = {
    style: PropTypes.object
};

export default Input;
