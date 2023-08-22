import * as post from './post';
import * as auth from './auth';
import * as music from './music';
import * as play from './play';

export const handlers = [
  ...Object.values(auth),
  ...Object.values(post),
  ...Object.values(music),
  ...Object.values(play),
];
