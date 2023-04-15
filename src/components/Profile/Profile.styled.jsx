import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 18rem;
  margin: 0 auto;
  padding-top: 0.625rem;
  background-color: white;
  border-radius: 0.6rem;
  overflow: hidden;
  border: 0.125rem solid gray;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.625rem;
  margin-bottom: 1rem;
`;

export const Avatar = styled.img`
  width: 200px;
`;

export const UserName = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;

export const Tag = styled.p`
  color: gray;
  font-size: 1.3rem;
`;
export const Location = styled.p`
  color: gray;
`;

export const StatsList = styled.ul`
  display: flex;
  background-color: lightgray;
  border-top: solid 1px gray;
`;

export const StatItem = styled.li`
  width: calc(100% / 3);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.625rem;
  &:not(:last-child){
    border-right: solid 1px gray;
`;

export const Label = styled.span`
  color: gray;
`;

export const Quantity = styled.span`
  font-weight: 500;
`;
