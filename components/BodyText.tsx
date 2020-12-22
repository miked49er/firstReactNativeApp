import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface IBodyTextProps {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
}

const BodyText = ({children, style}: IBodyTextProps) => {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'OpenSans',
        fontWeight: '400'
    }
});

BodyText.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    style: PropTypes.object
};

export default BodyText;
