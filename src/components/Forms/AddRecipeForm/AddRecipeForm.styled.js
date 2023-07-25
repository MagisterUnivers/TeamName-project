import { Form } from 'formik';
import { devices } from 'constants';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  margin-bottom: 80px;

  @media ${devices.desktop} {
    margin-bottom: 0;
  }
`;
