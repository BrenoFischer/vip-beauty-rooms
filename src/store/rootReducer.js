import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { servicesReducer } from "./services/services.reducer";
import { openingHoursReducer } from './openingHours/openingHours.reducer';
import { postsReducer } from "./posts/posts.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    services: servicesReducer,
    openingHours: openingHoursReducer,
    posts: postsReducer,
});