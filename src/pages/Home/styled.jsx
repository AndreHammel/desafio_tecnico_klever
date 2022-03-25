import styled from 'styled-components';

export const Container = styled.div`
  width: var(--main-width);
  margin: auto;
  margin-top: 50px;
  color: var(--white);

  .pencil-icon {
    font-size: 20px;
    margin-right: 8px;
    color: var(--white);
  }

  table {
    width: 100%;
    margin-top: 40px;

    th {
      font-size: var(--fs-title);
    }

    th:nth-of-type(1) {
      width: 25px;
    }

    th:nth-of-type(2) {
      text-align: left;
    }

    th:nth-of-type(3),
    td:nth-of-type(3) {
      text-align: right;
    }

    thead {
      height: 50px;
    }

    tr:nth-of-type(n + 1) {
      font-weight: bold;
      font-size: var(--fs-table);
      height: 60px;
    }
  }
`;

export const TopTablePainel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: var(--purple);
  }
`;
