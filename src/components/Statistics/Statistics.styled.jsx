import styled from 'styled-components';

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const StatSection = styled.section`
  width: 30rem;
  margin: 0 auto;
  border-radius: 0.25rem;
  overflow: hidden;
`;

export const Title = styled.h2`
  padding: 1.25rem;
  color: gray;
  background-color: #fff;
  text-align: center;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  width: calc(100% / 4);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.625rem;
  padding: 0.625rem 0;
  background-color: ${({ colorKey }) => {
    return getRandomHexColor(colorKey);
  }};
`;

export const Label = styled.span`
  color: #fff;
`;

export const Percentage = styled.span`
  color: #fff;
  font-weight: 500;
  font-size: 1.2rem;
`;
