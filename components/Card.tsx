import React from 'react';
import PropTypes from 'prop-types';
import { StyleProp, StyleSheet, View, ViewPropTypes, ViewStyle } from 'react-native';

interface ICardProps {
    children: React.ReactNode;
    style: StyleProp<ViewStyle>;
}

const Card = ({children, style}: ICardProps) => {
    return (
        <View style={[styles.wrapper, style]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        padding: 20,
        borderRadius: 10
    }
});

Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    style: ViewPropTypes.style
};

export default Card;
