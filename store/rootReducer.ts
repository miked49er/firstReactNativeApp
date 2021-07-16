import { placesReducer } from './places-reducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    places: placesReducer
})
