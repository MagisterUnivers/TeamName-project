import { devices } from 'constants';
import styled from 'styled-components';

export const Section = ({ SectionTitle }) => {
  return <StyledSection>{SectionTitle}</StyledSection>;
};

export const StyledSection = styled.section`
  padding-top: ${props => (props.firstsection ? '80px' : '80px')};
  padding-bottom: ${props => (props.lastsection ? '80px' : '0px')};

  @media ${devices.tablet} {
    padding-top: ${props => (props.firstsection ? '140px' : '100px')};
    padding-bottom: ${props => (props.lastsection ? '140px' : '0px')};
  }
  @media ${devices.desktop} {
    padding-top: ${props => (props.firstsection ? '160px' : '100px')};
  }
`;
