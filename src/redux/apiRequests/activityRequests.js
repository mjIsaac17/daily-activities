import { httpRequest } from '../../helpers/axiosRequests';
import {
  setError,
  successAddActivity,
  successGetActivities
} from '../reducers/activityReducer';
import setSnackbar from '../actions/snackbar';

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

export const saveActivity = async (activity, dispatch, token) => {
  try {
    const resp = await httpRequest('post', 'activities', activity, token);
    if (resp.error) {
      dispatch(setError(resp.error));
      return;
    }
    dispatch(successAddActivity(resp.activity));
    setSnackbar(dispatch, 'success', 'Success', 'Activity added', true);
  } catch (error) {
    dispatch(setError('An error ocurred when saving the activity'));
  }
};
