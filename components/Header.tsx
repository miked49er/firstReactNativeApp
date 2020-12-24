import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Platform } from 'react-native';

import Theme from '../constants/theme';
import HeaderText from './HeaderText';

interface IHeaderProps {
    title: string;
}

const Header = ({title}: IHeaderProps) => {
    return (
        <View
            style={[
                styles.headerBase,
                Platform.select({
                    ios: styles.headerIOS,
                    android: styles.headerAndroid
                })
            ]}
        >
            <HeaderText style={styles.title}>{title}</HeaderText>
        </View>
    );
};

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIOS: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    headerAndroid: {
        backgroundColor: Theme.primary
    },
    title: {
        color: Platform.OS === 'ios' ? Theme.primary : 'white',
    }
});

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
