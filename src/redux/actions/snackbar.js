import { updateSnackbar } from '../reducers/snackbarReducer';

export default function setSnackbar(dispatch, type, title, message, isOpen) {
  dispatch(updateSnackbar({ type, title, message, isOpen }));
}
