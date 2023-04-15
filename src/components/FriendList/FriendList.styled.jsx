import styled from 'styled-components';

export const List = styled.ul`
  width: 15rem;
  margin: 0 auto;
`;

export const Item = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1.25rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 1px 7px 19px -8px rgba(6, 6, 6, 1);
  &:not(:last-child) {
    margin-bottom: 1.25rem;
  }
`;
