import styled from 'styled-components';
import { devices } from 'constants/breakpoints';

export const Card = styled.div``;

export const Image = styled.img`
  background-image: url('./defaultimg.jpg');
  border-radius: 15px;
  display: block;
  width: 100%;
`;

export const Ingredientswrapper = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  ${props =>
    props.position === 'my'
      ? `flex-direction: column; gap: 4px;`
      : `flex-direction: row`}
`;
// || 'favorites'
export const Drinkingreds = styled.p`
  /* color: #f3f3f3; */
  color: ${props => props.theme.textColor};
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
`;
export const Ingredients = styled.span`
  /* color: rgba(243, 243, 243, 0.5); */
  color: ${props => props.theme.sectionTagTitle};
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const AboutStyled = styled.p`
  overflow: hidden;
  max-width: 335px;
  text-justify: distribute;
  height: 75px;
  /* color: #f3f3f3; */
  color: ${props => props.theme.bgrColor};
  font-size: 14px;
  font-weight: 400;
  line-height: calc (18 / 14);
  margin-bottom: 18px;
  margin-top: 18px;
  @media ${devices.tablet} {
    font-size: 16px;
    font-weight: 400;
    line-height: calc (22 / 16);
    margin-bottom: 24px;
    margin-top: 24px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
