import { devices } from 'constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 100%;
  height: auto;

  @media ${devices.tablet} {
    gap: 18px;
  }
`;

export const Message = styled.p`
  color: ${props => props.theme.textColor};

  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
  margin-top: 14px;

  @media ${devices.tablet} {
    font-size: 16px;
    line-height: calc(22 / 16);
  }
`;

export const Image = styled.div`
  margin-top: 50px;
  margin-bottom: 154px;
  display: flex;
  justify-content: center;
  width: 517px;
  height: 375px;

  @media ${devices.desktop} {
    margin: 50px auto 18px;
    width: 465px;
    height: 500px;
  }
`;
