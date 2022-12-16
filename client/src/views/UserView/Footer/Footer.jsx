import { Alert, Box, Snackbar } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Footer() {
  const workgroups = useSelector((state) => state.workgroups);
  const classes = useSelector((state) => state.classes);
  const auth = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (workgroups.error || classes.error || auth.error) setOpen(true);
    else setOpen(false);
  }, [workgroups.error, classes.error, auth.error]);
  return (
    <Box mt={2} mb={2} bgcolor="background.main">
      Hello, footer.
    </Box>
  );
}
