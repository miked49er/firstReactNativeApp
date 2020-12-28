import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import Theme from '../constants/theme';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Theme.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Theme.primaryColor
    }
});

export default createAppContainer(MealsNavigator);
