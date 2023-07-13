import styled from 'styled-components';

export const UserLogoWrp = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const UserAvatarWrp = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: none;
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const UserAvatar = styled.img`
  object-fit: contain;
  overflow: hidden;
`;

export const NameStyled = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1, 28;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1, 5;
  }

  @media screen and (min-width: 1440px) {
  }
`;
