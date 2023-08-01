import * as post from './post';
import * as auth from "./auth";

export const handlers = [...Object.values(auth),...Object.values(post)];
