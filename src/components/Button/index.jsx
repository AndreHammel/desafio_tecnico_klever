/* eslint-disable */ 
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert, Snackbar } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import Btn from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as C from './styled';

export function Button({ nameButton, values }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [decisionRemoveToken, setDecisionRemoveToken] = useState(false)
  const [fielsRequired, setFielsRequired] = useState(false);
  const valuesReducer = useSelector((state) => state.token);
  let { current: tokens } = useRef(
    JSON.parse(localStorage.getItem('tokens')) || [],
  );

  function saveData({ token, balance }) {
    const founded = tokens.find(
      (item) => item.token.toUpperCase() === token.toUpperCase(),
    );
    if (pathname === '/edit-token') {
      tokens = tokens.filter((item) => item.token !== valuesReducer.token);
      tokens.push(values);
      window.localStorage.setItem('tokens', JSON.stringify(tokens));
      return navigate('/');
    }
    if (!token || !balance) {
      setOpen(true);
      setFielsRequired(true);
    }
    if (!founded) {
      tokens.push({ token, balance });
      window.localStorage.setItem('tokens', JSON.stringify(tokens));
      return navigate('/');
    }
    setOpen(true);
  }

  function handleClose(event, reason) {
    if (reason === 'clickaway') return;
    setOpen(false);
    setFielsRequired(false);
  }

  function remove() {
    tokens = tokens.filter((item) => item.token !== valuesReducer.token);
    window.localStorage.setItem('tokens', JSON.stringify(tokens));
    setDecisionRemoveToken(false)
    return navigate('/');
  }
  

  function handleButtonNavigation(event) {
    event.preventDefault();
    switch (event.target.innerText) {
      case 'Add Token':
        return navigate('/add-token');
      case 'Home':
        return navigate(-1);
      case 'Save':
        saveData(values);
        break;
      case 'Remove':
        setDecisionRemoveToken(true);
        break;
      default:
        return '';
    }
  }

  return (
    <>
      <C.Button
        onClick={(event) => handleButtonNavigation(event)}
        nameButton={nameButton}
      >
        {nameButton}
      </C.Button>
      {
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          {fielsRequired ? (
            <Alert
              onClose={handleClose}
              severity="warning"
              sx={{ width: '100%' }}
            >
              Fields Token and Balance are required!
            </Alert>
          ) : (
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: '100%' }}
            >
              Token already in use!
            </Alert>
          )}
        </Snackbar>
      }
      {<Dialog
            open={decisionRemoveToken}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Klever token management"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText 
                id="alert-dialog-description"
              >
                Would you like to remove token?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Btn onClick={() => setDecisionRemoveToken(false)}>No</Btn>
              <Btn onClick={remove} autoFocus>Yes</Btn>
            </DialogActions>
          </Dialog>
      }
    </>
  );
}
