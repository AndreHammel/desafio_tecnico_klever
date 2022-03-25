import styled from 'styled-components';

const backgroundButton = (color) => {
  switch (color) {
    case 'Home':
      return 'var(--gray)';
    case 'Remove':
      return 'var(--red)';
    case 'Save':
      return 'var(--purple)';
    default:
      return 'var(--gray)';
  }
};

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  width: 130px;
  height: 40px;
  padding: 5px 10px;
  color: var(--white);
  font-size: var(--fs-button);
  font-weight: bold;
  background: ${(props) => backgroundButton(props.nameButton)};
`;
