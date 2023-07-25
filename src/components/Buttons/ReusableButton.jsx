import { devices } from 'constants';
import styled from 'styled-components';

export const ReusableButton = ({
  text = 'I am a button',
  ariaLabel = 'button for click',
  marginbottom = '0px',
  margintop = '0px',
  onClick,
  type = 'button',
}) => {
  return (
    <StyledButton
      type={type}
      aria-label={ariaLabel}
      marginbottom={marginbottom}
      margintop={margintop}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export const StyledButton = styled.button`
  border-radius: 42px;
  padding: 14px 40px;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  transition: 0.3s ease;

  background: transparent;
  border: 1px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.textColor};

  margin-top: ${props => (props.margintop ? props.margintop : '0px')};
  margin-bottom: ${props => (props.marginbottom ? props.marginbottom : '0px')};

  &:hover,
  :focus {
    background: ${props => props.theme.textColor};
    color: ${props => props.theme.bgrColor};
  }

  @media ${devices.tablet} {
    padding: 18px 44px;

    font-size: 16px;
    line-height: calc(18 / 16);
  }

  @media ${devices.desktop} {
    // empty.....for now
  }
`;
