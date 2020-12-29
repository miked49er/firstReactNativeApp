import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Theme from '../../constants/theme';

interface IHeaderButtonProps {

}

const CustomHeaderButton = (props: IHeaderButtonProps) => {
    return (
        <HeaderButton
            title=""
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'android' ? 'white' : Theme.primaryColor}
        />
    );
};

const styles = StyleSheet.create({
    wrapper: {}
});

CustomHeaderButton.propTypes = {};

export default CustomHeaderButton;
