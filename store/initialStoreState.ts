import { initialPlacesState, PlacesState } from './places-reducers';

export interface StoreState {
    places: PlacesState;
}

export const initialStoreState = Object.freeze<StoreState>({
    places: initialPlacesState
});
