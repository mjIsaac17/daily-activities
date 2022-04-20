import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import setSnackbar from '../redux/actions/snackbar';

export default function Toast() {
  const dispatch = useDispatch();
  const { type, title, message, isOpen } = useSelector(
    (state) => state.snackbar
  );

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    // setSnackbar(dispatch, type, title, message, false);
    setSnackbar(dispatch, type, title, message, false);
  };

  return (
    <Snackbar
      autoHideDuration={4000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isOpen}
      onClose={handleClose}
      message={message}
    >
      <Alert
        severity={type}
        variant='filled'
        action={
          <>
            <IconButton
              aria-label='close'
              color='inherit'
              sx={{ p: 0.5 }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </>
        }
      >
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
}
