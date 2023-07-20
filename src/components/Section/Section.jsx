import styled from 'styled-components';
import { devices } from 'constants/breakpoints';

export const Section = ({ SectionTitle }) => {
  return <StyledSection>{SectionTitle}</StyledSection>;
};

export const StyledSection = styled.section`
  padding-top: 80px;
  padding-bottom: ${props => (props.lastSection ? '80px' : '0px')};

  @media ${devices.tablet} {
    padding-top: 100px;
    padding-bottom: ${props => (props.lastSection ? '100px' : '0px')};
  }
`;
