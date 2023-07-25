import { devices } from 'constants';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  background-color: ${props => props.theme.bgrColor};
`;

export const StyledHeaderWrp = styled.div`
  border-bottom: 1px solid ${props => props.theme.borderColor};
  padding-top: 16px;
  padding-bottom: 15px;

  @media ${devices.tablet} {
    padding-top: 20px;
    padding-bottom: 19px;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const UserLogoWrp = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;
