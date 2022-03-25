import React, { useRef } from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as C from './styled';
import { setToken, setBalance } from '../../redux/reducers/tokenReducer';
import { Button } from '../../components/Button';
import { WishWalletHeader } from '../../components/WishWalletHeader';

export function Home() {
  const dispatch = useDispatch();
  const { current: tokens } = useRef(
    JSON.parse(localStorage.getItem('tokens')) || [],
  );
  const navigate = useNavigate();

  function editToken(token, balance) {
    dispatch(setToken(token));
    dispatch(setBalance(parseFloat(balance)));
    navigate('/edit-token');
  }

  return (
    <C.Container>
      <C.TopTablePainel>
        <WishWalletHeader />
        <Button nameButton="Add Token" />
      </C.TopTablePainel>
      <table>
        <thead>
          <tr>
            <th>Tokens</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map(({ token, balance }, index) => (
            <tr key={index}>
              <td>
                <Tooltip title="edit token">
                  <IconButton onClick={() => editToken(token, balance)}>
                    <BsPencilSquare className="pencil-icon" />
                  </IconButton>
                </Tooltip>
              </td>
              <td>{token}</td>
              <td>{balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </C.Container>
  );
}
