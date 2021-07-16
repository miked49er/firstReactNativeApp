import React from 'react';
import { Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants/Colors';

interface IHeaderButtonProps {
    action: () => void;
    icon: string;
}

const HeaderButton = ({action, icon}: IHeaderButtonProps) => {
    const Touchable: any = Platform.OS === 'android' && Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;
    return (
        <Touchable onPress={action}>
            <View style={styles.wrapper}>
                <Icon
                    size={20}
                    name={icon}
                    color={Platform.OS === 'android' ? 'white' : Colors.primary}
                /></View>
        </Touchable>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        margin: 10
    }
});

export default HeaderButton;
