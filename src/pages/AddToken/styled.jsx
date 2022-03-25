import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--main-width);
  margin: auto;
  margin-top: 50px;

  .item {
    align-self: flex-end;
  }
`;
export const SubContainer = styled.div`
  width: 540px;

  .add-token-top {
    display: flex;
    justify-content: space-between;
    font-size: var(--fs-title);
    font-weight: bold;
    span {
      align-self: end;
    }
  }
`;
