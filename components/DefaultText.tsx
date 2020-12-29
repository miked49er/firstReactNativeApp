import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TextStyle, StyleProp, TextProps } from 'react-native';

interface IDefaultTextProps extends TextProps {
    children?: React.ReactNode;
}

const DefaultText = (props: IDefaultTextProps) => {
    return (
        <Text {...props} style={[props.style, styles.text]}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans'
    }
});

export default DefaultText;
