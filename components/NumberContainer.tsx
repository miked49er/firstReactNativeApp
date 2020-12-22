import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

import Theme from '../constants/theme';

interface INumberContainerProps {
    children: React.ReactNode;
}

const NumberContainer = (props: INumberContainerProps) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        borderWidth: 2,
        borderColor: Theme.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: Theme.accent,
        fontSize: 22
    }
});

NumberContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default NumberContainer;
