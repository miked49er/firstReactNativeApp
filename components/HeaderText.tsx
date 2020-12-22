import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface IHeaderTextProps {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
}

const HeaderText = ({children, style}: IHeaderTextProps) => {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'OpenSans',
        fontWeight: '700',
        fontSize: 18
    }
});

HeaderText.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    style: PropTypes.object
};

export default HeaderText;
