import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Button } from '../Button';
import * as C from './styled';

export function FormComponent({ activedButtonRemove }) {
  const { pathname } = useLocation();
  const [token, setToken] = useState('');
  const [balance, setBalance] = useState('');
  const valuesReducer = useSelector((state) => state.token);

  useEffect(() => {
    if (pathname === '/edit-token') {
      setToken(valuesReducer.token);
      setBalance(valuesReducer.balance);
    }
  }, []);

  return (
    <C.Form>
      <label htmlFor="token">Token</label>
      <input
        id="token"
        type="text"
        onChange={(event) => setToken(event.target.value)}
        value={token}
        required
      />
      <label htmlFor="balance">Balance</label>
      <input
        id="balance"
        type="number"
        onChange={(event) => setBalance(event.target.value)}
        value={balance}
        required
      />
      <C.Painel activedButtonRemove={activedButtonRemove}>
        {activedButtonRemove && <Button nameButton="Remove" />}
        <Button nameButton="Save" values={{ token, balance }} />
      </C.Painel>
    </C.Form>
  );
}
