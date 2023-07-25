import { devices } from 'constants';
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  margin-bottom: 40px;
  overflow: hidden;
  @media ${devices.tablet} {
    margin-bottom: 80px;
  }
`;
export const DrinkListStyled = styled.ul`
  display: grid;
  row-gap: 28px;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 40px;
  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 40px;
  }
  @media ${devices.desktop} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 80px;
  }
`;
