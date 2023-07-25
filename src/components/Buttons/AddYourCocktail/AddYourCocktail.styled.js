import { StyledButton } from "components/Forms/RegisterForm/RegisterForm.styled";
import styled from "styled-components";


export const StyledAddButton = styled(StyledButton)`
  width: 152px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    width: 170px;
    height: 54px;
  }
`;