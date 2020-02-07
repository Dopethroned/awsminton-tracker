import { Auth } from 'aws-amplify';

const baseUrl = process.env.REACT_APP_API_HOST;
const storage = window.localStorage;

export const getDataRequest = () => (
  fetch('https://pokeapi.co/api/v2/pokemon/eevee', {
    method: 'GET',
  })
  .then(res => res.json())
  .catch((err) => { throw (err); })
);

export const loginUserRequest = async (payload) => {
  const { username, password } = payload;
  try {
    const user = await Auth.signUp(username, password);
    return user;
  } catch(e) {
    return e;
  }
};

export const getCurrentUserRequest = async (payload) => {
  try {
    const user = await Auth.currentSession();
    return user;
  } catch (e) {
    return e;
  }
};

export const signOutUserRequest = async (payload) => {
  try {
    await Auth.signOut();
    return;
  } catch (e) {
    return e;
  }
};

/*
export const loginUserRequest = (payload) => {
  return fetch(`${baseUrl}/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(res => {
      storage.setItem('token', '');
      return res.json();
    })
    .then(data => {
      return data
    })
    .catch(error => {
      throw (error);
    });
};

export const getInitialData = (token) => {
  return fetch(`${baseUrl}/initialdata`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token,
    },
  })
    .then(res => {
      return res.json();
    })
    .catch(error => {
      throw (error);
    });
};
*/
