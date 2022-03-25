import React from 'react';
import { WishWalletHeader } from '../../components/WishWalletHeader';
import { Button } from '../../components/Button';
import { FormComponent } from '../../components/Form';
import * as C from './styled';

export function EditToken() {
  return (
    <C.Container>
      <WishWalletHeader />
      <C.SubContainer className="item">
        <div className="add-token-top">
          <span>Edit Token</span>
          <Button nameButton="Home" />
        </div>
        <FormComponent activedButtonRemove />
      </C.SubContainer>
    </C.Container>
  );
}
