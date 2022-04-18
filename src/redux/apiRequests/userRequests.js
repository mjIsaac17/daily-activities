import { httpRequest } from '../../helpers/axiosRequests';
import { setError, setLoading, loginSuccess } from '../reducers/userReducer';

export const login = async (dispatch, user) => {
  try {
    dispatch(setLoading(true));
    const resp = await httpRequest('post', 'auth/login', user);
    if (resp.error) {
      dispatch(setError(resp.error));
      return;
    }
    dispatch(loginSuccess(resp.user));
  } catch (error) {
    dispatch(setError('An error ocurred when trying to log in'));
  }
};

export const register = async (dispatch, user) => {
  try {
    dispatch(setLoading(true));
    const resp = await httpRequest('post', 'auth/register', user);
    if (resp.error) {
      dispatch(setError(resp.error));
      return;
    }
    dispatch(loginSuccess(resp.user));
  } catch (error) {
    dispatch(setError('An error ocurred when trying to register'));
  }
};
