import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Theme from '../constants/theme';

interface IMainButtonProps {
    children: React.ReactNode;
    onPress: () => void;
}

const MainButton = ({children, onPress}: IMainButtonProps) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Theme.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontFamily: 'OpenSans',
        fontWeight: '400',
        fontSize: 18
    }
});

MainButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    onPress: PropTypes.func.isRequired
};

export default MainButton;
