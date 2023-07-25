import styled from 'styled-components';
import { Form } from 'formik';
import { devices } from 'constants/breakpoints';

export const StyledForm = styled(Form)`
  margin-bottom: 80px;

  @media ${devices.desktop} {
    margin-bottom: 0;
  }
`;