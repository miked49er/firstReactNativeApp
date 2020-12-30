import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Theme from '../constants/Theme';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Theme.primary : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Theme.primary
    }
});

export default createAppContainer(ProductsNavigator);
