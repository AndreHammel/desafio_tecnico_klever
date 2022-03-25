import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  font-weight: bold;

  label {
    display: inline-block;
    margin-top: 25px;
  }

  input {
    height: 30px;
    border-radius: 5px;
    border: none;
    margin: 10px 0;
    padding: 5px 10px;
    font-size: 20px;
  }
`;

export const Painel = styled.div`
  display: flex;
  margin-top: 25px;
  ${(props) =>
    props.activedButtonRemove
      ? `justify-content: space-between;`
      : `align-self: flex-end`}
`;
