import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const client = axios.create({
  baseURL: apiUrl,
  // TODO: Bearer token 넣는 로직 필요
});
