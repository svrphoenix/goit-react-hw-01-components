import styled from 'styled-components';

export const Status = styled.span`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Name = styled.p`
  color: black;
  font-size: 1.5rem;
  font-weight: 500;
`;
