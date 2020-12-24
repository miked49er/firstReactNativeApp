import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import Theme from '../constants/theme';

interface IMainButtonProps {
    children: React.ReactNode;
    onPress: () => void;
}

const MainButton = ({children, onPress}: IMainButtonProps) => {
    let ButtonComponent: any = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.buttonContainer}>
            <ButtonComponent activeOpacity={0.6} onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{children}</Text>
                </View>
            </ButtonComponent>
        </View>
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
    },
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden'
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
