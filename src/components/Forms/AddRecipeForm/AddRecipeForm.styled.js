import styled from 'styled-components';
import { Form } from 'formik';
import { StyledButton } from 'components/RegisterForm/RegisterForm.styled';
import { devices } from 'constants/breakpoints';

export const StyledForm = styled(Form)`
  margin-bottom: 80px;

  @media ${devices.desktop} {
    margin-bottom: 0;
  }
`;

export const StyledAddButton = styled(StyledButton)`
  width: 107px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.textColor};
  color: ${props => props.theme.bgrColor};

  @media ${devices.tablet} {
    width: 118px;
    height: 54px;
  }
`;
