import styled from 'styled-components';
import { devices } from 'constants/breakpoints';

export const Card = styled.div``;
export const OneMoreWrapper = styled.div`
  border-radius: 15px;

  transition: scale 400ms ease, box-shadow 400ms ease;
  &:hover,
  &:focus {
    scale: 0.98;
    /* scale: 1.02; */
    box-shadow: 0 0 12px ${props => props.theme.secondaryTextColor};
  }
`;
export const ImageWrapper = styled.div`
  width: 335px;
  height: 360px;
  border-radius: 15px;
  overflow: hidden;
  @media ${devices.tablet} {
    width: 342px;
  }

  @media ${devices.desktop} {
    width: 400px;
    height: 400px;
  }
`;

export const Image = styled.img`
  background-image: url('./defaultimg.jpg');
  border-radius: 15px;
  display: block;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 600ms ease;
  &:hover,
  &:focus {
    transform: scale(1.03);
     }
`;

export const Ingredientswrapper = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  ${props =>
    (props.position === 'my' || props.position === 'favorite')
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
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 335px;
  /* text-justify: distribute; */
  height: 75px;
  /* color: #f3f3f3; */
  color: ${props => props.theme.textColor};
  font-size: 14px;
  font-weight: 400;
  line-height: calc(18 / 14);
  margin-bottom: 18px;
  margin-top: 18px;

  @media ${devices.tablet} {
    font-size: 16px;
    font-weight: 400;
    line-height: calc(22 / 16);
    margin-bottom: 24px;
    margin-top: 24px;
    height: 110px;
    -webkit-line-clamp: 5;
  }
  @media ${devices.desktop} {
    height: 93px;
    -webkit-line-clamp: 4;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
  position: relative;
`;
