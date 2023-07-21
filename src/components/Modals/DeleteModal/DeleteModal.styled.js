import styled from 'styled-components';
import { devices } from 'constants';
import { StyledButton } from 'components/Buttons/LogoutButton/LogoutBtn.styled';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--btn-hover-color);
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  width: 335px;
  height: 150px;
  border-radius: 16px;
  position: absolute;
  z-index: 1;
  top: -300%;
  right: auto;
  left: auto;
 
`;

export const StyledText = styled.p`
  color: var(--main-text-color);
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: calc(18 / 14);
  letter-spacing: -0.28px;
  margin-bottom: 25px;

  @media ${devices.tablet} {
    font-size: 18px;
    font-weight: 400;
    line-height: calc(24 / 18);
    letter-spacing: -0.36px;
    margin-bottom: 37px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  @media ${devices.tablet} {
    gap: 12px;
  }
`;

export const StyledDelButton = styled(StyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #434D67;
`;
