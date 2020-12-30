import Meal from '../../models/meal';
import { MEALS } from '../../data/dummy-data';
import { SET_FILTERS, TOGGLE_FAVORITE } from '../actions/meals';
import { AppliedFilters } from '../../screens/FiltersScreen';

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

const mealsReducer = (state: MealsState = initialState, action: { type: string; mealId?: string; filters?: AppliedFilters }) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId!);
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
        case SET_FILTERS:
            const appliedFilters = action.filters!;
            const filteredMeals = state.meals.filter(meal => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                if (appliedFilters.vegan && !meal.isVegan) {
                    return false;
                }
                if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false;
                }
                return true;
            });
            return {
                ...state,
                filteredMeals: filteredMeals
            };
        default:
            return state;
    }
};

export default mealsReducer;
