import styled from 'styled-components';

export const History = styled.table`
  margin: 0 auto;
  width: 25rem;
  text-align: center;
  box-shadow: 0px 8px 10px -3px rgba(2, 4, 20, 1);
  border-radius: 0.25rem;
  overflow: hidden;
  border-collapse: collapse;
`;

export const Head = styled.thead`
  background-color: lightblue;
  color: white;
  text-transform: uppercase;
`;
export const HeaderCell = styled.th`
  padding: 0.625rem;
  border: solid 1px white;
`;
export const BodyRow = styled.tr`
  text-transform: capitalize;
  &:nth-child(2n) {
    background-color: #eaeaea;
  }
`;

export const BodyCell = styled.td`
  padding: 0.625rem;
  border: solid 1px white;
  color: gray;
`;
