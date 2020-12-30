import Meal from '../../models/meal';
import { MEALS } from '../../data/dummy-data';

interface MealsState {
    meals: Meal[],
    filteredMeals: Meal[],
    favoriteMeals: Meal[],
}

const initialState: MealsState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state: MealsState = initialState, action) => {
    return state;
};

export default mealsReducer;
