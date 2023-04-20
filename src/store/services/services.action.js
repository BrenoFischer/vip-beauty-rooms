import { SERVICES_ACTION_TYPES } from "./services.types";

import { createAction } from "../../utils/reducer.utils";

export const setServices = (services) => createAction(SERVICES_ACTION_TYPES.SET_SERVICES, services);