import { OPENING_HOURS_ACTION_TYPES } from "./openingHours.types";

import { createAction } from "../../utils/reducer.utils";

export const setOpeningHours = (openingHours) => createAction(OPENING_HOURS_ACTION_TYPES.SET_OPENING_HOURS, openingHours);