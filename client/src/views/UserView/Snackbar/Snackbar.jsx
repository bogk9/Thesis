import { Alert, Box, Snackbar } from '@mui/material';
import { createSelector } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearNotification } from '../../../redux/actions/messages';

export function StatusSnackbar() {
  const workgroups = useSelector((state) => state.workgroups);
  const classes = useSelector((state) => state.classes);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (workgroups.error || classes.error) {
      setOpen(true);
      setAlertMessage(workgroups.error || classes.error);
    }
  }, [workgroups.error, classes.error]);
  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert severity="error">{alertMessage}</Alert>
    </Snackbar>
  );
}

export function MessageSnackbar() {
  const dispatch = useDispatch();
  const conversationsSelector = state => state.messages.conversations;
  const notificationsSelector = createSelector(conversationsSelector, (conversations) => {
    return conversations.map(conv => conv.notification)
  })
  const notifications = useSelector(notificationsSelector)
  const handleClose = (notification) => {
    dispatch(clearNotification(notification))
  }

  useEffect(() => console.log(notifications), [notifications]);
  return (
    <Box>
    {Array.isArray(notifications) ? notifications.map(notification => (
      <>
      <Snackbar
      open={notification?.text}
      onClose={() => handleClose(notification)}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert severity="info">You've got an new unread message.</Alert>
    </Snackbar>
    </>
    )) : ""}
    </Box>
  )
}