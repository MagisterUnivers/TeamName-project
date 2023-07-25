import { devices } from 'constants';
import styled from 'styled-components';

export const Section = styled.div`
  max-width: 100%;
  margin-bottom: 80px;
  overflow: hidden;
`;

export const SectionTitle = styled.p`
  color: ${props => props.theme.textColor};
  font-family: Manrope, sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 44px;
  margin-bottom: 40px;
`;

export const Cardwrapper = styled.div`
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;

  @media ${devices.tablet} {
    max-width: 768px;
  }

  @media ${devices.desktop} {
    max-width: 100%;
  }
`;
