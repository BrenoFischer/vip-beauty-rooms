import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { servicesReducer } from "./services/services.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    services: servicesReducer,
});