import { SERVICES_ACTION_TYPES } from "./services.types";

export const SERVICES_INITIAL_STATE = {
    services: []
}

export const servicesReducer = (state = SERVICES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type) {
        case SERVICES_ACTION_TYPES.SET_SERVICES:
            return {...state, services: payload};
        default:
            return state;
    }
}