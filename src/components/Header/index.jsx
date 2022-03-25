import React from 'react';
import logo from '../../assets/logo.svg';
import * as C from './styled';

export function Header() {
  return (
    <C.ContainerHeader>
      <C.IMG src={logo} alt="logo" />
    </C.ContainerHeader>
  );
}
