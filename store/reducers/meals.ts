import Meal from '../../models/meal';
import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';

export interface MealsState {
    meals: Meal[],
    filteredMeals: Meal[],
    favoriteMeals: Meal[],
}

const initialState: MealsState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state: MealsState = initialState, action: { type: string; mealId: string; }) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                return {
                    ...state,
                    favoriteMeals: updatedFavMeals
                };
            } else {
                let meal = state.meals.find(meal => meal.id === action.mealId) || new Meal('404', [], 'Meal Not Found', '', '', '', 0, [], [], false, false, false, false);
                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.concat(meal)
                };
            }
            break;
        default:
            return state;
    }
};

export default mealsReducer;
