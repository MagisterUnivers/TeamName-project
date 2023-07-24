import axios from 'axios';

export const instance = axios.create({
  // baseURL: 'https://cocktails-backend-cwrh.onrender.com/',
  baseURL: 'http://localhost:3001/',
  headers: {
    'Content-Type': 'application/json',
  },
});
