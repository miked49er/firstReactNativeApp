import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton, HeaderButtonProps } from 'react-navigation-header-buttons';
import Theme from '../../constants/Theme';

const ShopHeaderButton = (props: HeaderButtonProps) => {
    return (
        <HeaderButton
            {...props}
            title=""
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'android' ? 'white' : Theme.primary}
        />
    );
};

const styles = StyleSheet.create({
    wrapper: {}
});

export default ShopHeaderButton;
