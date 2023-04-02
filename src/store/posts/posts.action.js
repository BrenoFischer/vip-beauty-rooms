import { POSTS_ACTION_TYPES } from "./posts.types";

import { createAction } from "../../utils/reducer.utils";

export const setPosts = (posts) => createAction(POSTS_ACTION_TYPES.SET_POSTS, posts);