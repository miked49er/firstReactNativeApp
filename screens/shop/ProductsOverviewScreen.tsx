import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

interface IProductsOverviewScreenProps {

}

const ProductsOverviewScreen = (props: IProductsOverviewScreenProps) => {
    return (
        <FlatList
            data={[]}
            renderItem={() => (<></>)}
        />
    );
};

const styles = StyleSheet.create({
    wrapper: {}
});

export default ProductsOverviewScreen;
