import { devices } from 'constants';
import styled from 'styled-components';

export const UserLogoWrp = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  @media ${devices.tablet} {
    gap: 14px;
  }
`;

export const UserAvatarWrp = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: none;

  cursor: pointer;

  @media ${devices.tablet} {
    width: 44px;
    height: 44px;
  }
`;

export const UserAvatar = styled.img`
  object-fit: contain;
  overflow: hidden;
  border-radius: 50%;
`;

export const NameStyled = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1, 28;

  cursor: pointer;

  @media ${devices.tablet} {
    font-size: 16px;
    line-height: 1, 5;
  }
`;
