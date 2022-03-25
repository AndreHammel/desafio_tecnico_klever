import React from 'react';
import { ReactComponent as Icon } from '../../assets/shooting-star.svg';
import * as C from './styled';

export function WishWalletHeader() {
  return (
    <C.Container>
      <Icon className="shooting-start-icon" />
      <h1>Wish Wallet</h1>
    </C.Container>
  );
}
