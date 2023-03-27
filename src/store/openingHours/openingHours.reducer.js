import { OPENING_HOURS_ACTION_TYPES } from "./openingHours.types";

export const OPENING_HOURS_INITIAL_STATE = {
    openingHours: []
}

export const openingHoursReducer = (state = OPENING_HOURS_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type) {
        case OPENING_HOURS_ACTION_TYPES.SET_OPENING_HOURS:
            return {...state, openingHours: payload};
        default:
            return state;
    }
}