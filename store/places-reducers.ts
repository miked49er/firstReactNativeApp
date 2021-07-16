import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Place } from '../models/Place';

export interface PlacesState {
    list: Place[];
}

export const initialPlacesState = Object.freeze<PlacesState>({
    list: []
});

const handlePlacesReceived: CaseReducer<PlacesState,
    PayloadAction<{ list: Place[] }>> = (state, {payload}) => {
    return {
        ...state,
        list: payload.list,
    };
};

const handleAddPlace: CaseReducer<PlacesState,
    PayloadAction<{place: Place}>> = (state, {payload}) => {
    return {
        ...state,
        list: [...state.list, payload.place]
    };
};

const placesSlice = createSlice({
    name: 'places',
    initialState: initialPlacesState,
    reducers: {
        placesReceived: handlePlacesReceived,
        addPlace: handleAddPlace,
    },
});

export const placesReducer = placesSlice.reducer;
export const placesReceived = placesSlice.actions.placesReceived;
export const addPlace = placesSlice.actions.addPlace;
