import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL; // 환경 변수 값 가져오기

export const client = axios.create({
  baseURL: apiUrl,
});
