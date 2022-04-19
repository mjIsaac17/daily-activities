import { httpRequest } from '../../helpers/axiosRequests';
import { setError, successGetActivities } from '../reducers/activityReducer';

export const getActivities = async (dispatch, token) => {
  try {
    const resp = await httpRequest('get', 'activities', {}, token);
    if (resp.error) {
      dispatch(setError(resp.error));
      return;
    }
    dispatch(successGetActivities(resp.activities));
  } catch (error) {
    dispatch(setError('An error ocurred when loading the activities'));
  }
};
