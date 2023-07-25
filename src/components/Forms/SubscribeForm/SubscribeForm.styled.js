import { Form } from 'formik';
import { devices } from 'constants';
import { styled } from 'styled-components';
import { StyledInput } from 'components/Forms/RegisterForm/RegisterForm.styled';

export const StyledFormInsight = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  @media ${devices.tablet} {
    max-width: 309px;
  }
`;

export const StyledText = styled.p`
  margin-bottom: 24px;

  color: ${props => props.theme.textColor};
  font-size: 14px;
  line-height: calc(20 / 14);
  @media ${devices.tablet} {
    font-size: 18px;
    line-height: calc(24 / 18);
  }
`;

export const StyledInputSubscribe = styled(StyledInput)`
  color: ${props => props.theme.textColor};
  opacity: 1;
  transition: border-color 0.5s ease-in-out;
  border-color: ${props => props.theme.borderColor};

  &:hover,
  &:focus {
    color: ${props => props.theme.textColor};
    border-color: ${props => props.theme.hoverBorderColor};
  }

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${props => props.theme.textColor};
    opacity: 1; /* Firefox */
  }

  @media ${devices.tablet} {
    line-height: calc(26 / 17);
    padding-top: 13px;
  }
`;
export const StyledButton = styled.button`
  margin-top: 18px;
  height: 54px;

  color: ${props =>
    props.disabled ? props.theme.borderColor : props.theme.textColor};
  background-color: transparent;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: calc(18 / 16);

  border-radius: 200px;
  border: 1px solid ${props => props.theme.borderColor};

  transition: color 0.5s, border-color 0.5s;

  &:not(:disabled):hover {
    border-color: ${props => props.theme.textColor};
  }

  @media ${devices.tablet} {
    height: 56px;

    font-size: 17px;
    line-height: calc(26 / 17);
  }
`;
