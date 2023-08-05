import { rest } from 'msw';
import { LoginBody, LoginResponse } from '../../types';

export const postLogin = rest.post<LoginBody, LoginResponse>('/login', async (req, res, ctx) =>
  res(
    // Respond with a 200 status code
    ctx.status(200),
    ctx.json({
      email: 'email@email.com',
      nickname: 'SeieunYoo',
    }),
  ),
);
