import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

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

  /* background: linear-gradient(177deg, #0A0A11 0%, rgba(10, 10, 17, 0.00) 100%), linear-gradient(280deg, #0A0A11 0%, rgba(10, 10, 17, 0.00) 100%), linear-gradient(360deg, #0A0A11 0%, rgba(10, 10, 17, 0.00) 100%), linear-gradient(88deg, #0A0A11 0%, rgba(10, 10, 17, 0.00) 100%), url(<path-to-image>), lightgray -51.543px -70.346px / 128.954% 116.823% no-repeat; */
`;

export const Message = styled.p`
  /* width: 205px; */
  color: ${props => props.theme.textColor};
  /* color: ${props => props.theme.bgrColor}; */

  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
  margin-top: 14px;
  @media ${devices.tablet} {
    /* width: 236px; */
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
