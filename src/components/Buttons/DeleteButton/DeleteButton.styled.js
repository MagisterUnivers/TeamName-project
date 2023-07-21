import { devices } from 'constants/breakpoints';
import { styled } from 'styled-components';
import { ReactComponent as Trash } from '../../../assets/icons/trash.svg';

export const DeleteButtonStyled = styled.button`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #161f37;
  outline: none;
  border: none;
  text-align: center;
  padding-top: 5px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.borderColor};
  transition: background-color 0.3s ease;

  @media ${devices.tablet} {
    width: 54px;
    height: 54px;
  }
  @media ${devices.desktop} {
  }

  &:hover,
  &:active {
    background-color: ${props => props.theme.secondBtnHoverColor};
  }
`;

export const StyledTrash = styled(Trash)`
  fill: transparent;
  stroke: ${props => props.theme.textColor};
`;
