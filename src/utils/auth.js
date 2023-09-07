import axios from 'axios';
import debug from 'debug';
import Cookie from 'js-cookie';
import BASE_URL from '../constants';

const logger = debug('auth');

const signIn = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}/sessions/login`, user);
    Cookie.set('access_token', response.data.token);
  } catch (e) {
    logger(e);
  }
};

const getAccessToken = () => Cookie.get('access_token');

const isAuthenticated = () => !!getAccessToken();

const signUp = async (newUser) => {
  try {
    await axios.post(`${BASE_URL}/users`, newUser);
    await signIn(newUser);
  } catch (e) {
    logger(e);
  }
};

export {
  signIn,
  signUp,
  getAccessToken,
  isAuthenticated,
};

export default signIn;
