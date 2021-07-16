import { PlacesState } from './places-reducers';
import { StoreState } from './initialStoreState';
import { createSelector } from '@reduxjs/toolkit';

export const selectPlacesState = (state: StoreState): PlacesState => state.places;

export const selectPlaceList = createSelector<
    StoreState,
    PlacesState,
    any[]
>(selectPlacesState, places => {
    return places.list;
});
