import styled from 'styled-components';
import { Form } from 'formik';
import { StyledButton } from 'components/RegisterForm/RegisterForm.styled';

export const StyledForm = styled(Form)``;

export const StyledAddButton = styled(StyledButton)`
  width: 107px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    width: 118px;
    height: 54px;
  }
`;
