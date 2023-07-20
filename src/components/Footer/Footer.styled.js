import { devices } from 'constants';
import { styled } from 'styled-components';

export const StyledFooter = styled.footer`
  padding-top: 40px;
  padding-bottom: 18px;
  border-top: 1px solid ${props => props.theme.borderColor};

  form {
    margin: 0 auto 80px auto ;
  }

  @media ${devices.tablet} {
    padding-top: 80px;
    padding-bottom: 24px;

    form {
      margin: 0;
    }
  }
`;

export const StyledWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  @media ${devices.tablet} {
    margin-bottom: 80px;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${devices.tablet} {
    gap: 28px;
  }

  @media ${devices.desktop} {
    gap: 40px;
  }
`;

export const StyledBottomWrapper = styled.div`
  * {
    font-size: 12px;
    line-height: calc(16 / 12);
    letter-spacing: -0.24px;
    color: ${props => props.theme.secondaryTextColor};
  }
  @media ${devices.tablet} {
    display: flex;
    justify-content: space-between;

    font-size: 14px;
    line-height: calc(18/14);
    letter-spacing: -0.28px;
  }
`;

export const StyledFlexWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 14px;

  @media ${devices.tablet} {
    gap: 18px;
  }
`;
