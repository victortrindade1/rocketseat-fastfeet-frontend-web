import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  border-spacing: 0 15px;
  border-collapse: separate;
  font-size: 16px;
  margin-top: 25px;

  thead {
    th {
      text-align: left;
    }

    th:first-child {
      padding-left: 20px;
    }

    th:last-child {
      text-align: center;
    }
  }

  tbody {
    tr td {
      padding-top: 20px;
      padding-bottom: 20px;
      background: #fff;
      color: #666666;
    }

    tr td:first-child {
      padding-left: 20px;
      padding-right: 0;

      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    tr td:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;

      text-align: center;

      width: 70px;
    }
  }
`;
