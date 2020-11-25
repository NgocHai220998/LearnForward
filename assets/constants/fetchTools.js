import { verifyUser, } from './services.js';

/*
  query options:
 */
export const defaultOptions = {
  credentials: 'same-origin',
};

export const postMethod = {
  method: 'POST',
};

export const getMethod = {
  method: 'GET',
};

export const requestOptions = (token) => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
};

export const jsonHeaderAuth = () => {
  const user = JSON.parse(window.localStorage.getItem('user'));
  if (verifyUser(user)) {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
  }
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
};

export const jsonHeader = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

/*
  query response helpers:
 */
export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response && response.status && response.status === 401) {
    window.localStorage.clear();
  }
  const error = new Error(response.statusText);
  error.response = response;
  // throw error;
  return Promise.reject(error);
};

export const parseJSON = (response) => {
  return response.json();
};
