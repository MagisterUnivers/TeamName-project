import { styled } from 'styled-components';

export const StyledAddButton = styled.button`
  border-radius: 42px;
  border: 1px solid ${props => props.theme.borderColor};
  background: transparent;
  padding: 18px 44px;
  color: ${props => props.theme.textColor};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.28;
  transition: 0.3s ease;

  &:hover {
    background: ${props => props.theme.textColor};
    color: ${props => props.theme.bgrColor};
  }
`;
