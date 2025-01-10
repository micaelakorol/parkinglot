import React, { useContext, useEffect } from 'react';
import { Alert, AlertDescription } from '@chakra-ui/react';
import { AlertContext } from '../../../context/AlertContext';

const CustomAlert = ({ status, message, ...props }) => {
  const { setAlert } = useContext(AlertContext);
  useEffect(() => {
    return () => {
      if (setAlert) {
        setAlert({ status: '', message: '' });
      }
    };
  }, []);
  return (
    <>
      {message !== '' ? (
        <Alert status={status} {...props}>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      ) : null}
    </>
  );
};

export default CustomAlert;
