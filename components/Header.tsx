import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import Theme from '../constants/theme';

interface IHeaderProps {
    title: string;
}

const Header = ({title}: IHeaderProps) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Theme.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'black',
        fontSize: 18
    }
});

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
