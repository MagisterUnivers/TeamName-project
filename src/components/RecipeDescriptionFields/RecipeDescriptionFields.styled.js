import { Formik, Form, Field, ErrorMessage } from 'formik';

import styled from 'styled-components';

export const StyledForm = styled(Formik)``;
export const StyledFormInsight = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;

export const StyledLabel = styled.label`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  position: absolute;
  pointer-events: none;
  left: 0;
  top: -10%;
  transition: 0.2s ease all;
`;

export const StyledInput = styled(Field)`
  width: 100%;
  height: 34px;
  border: none;
  border-bottom: 1px solid rgba(243, 243, 243, 0.5);
  background-color: transparent;
  outline: none;
  color: rgba(243, 243, 243, 0.5);
  padding: 10px;
  padding-bottom: 5px;

  &:focus ~ label,
  &:hover ~ label {
    transform: translateY(-50%) scale(0.9);
  }

  @media screen and (min-width: 768px) {
    height: 41px;
  }
`;

export const StyledError = styled(ErrorMessage)`
  margin-top: 5px;
  font-size: 11px;
  font-weight: 400;
  line-height: calc (14 / 11);
  color: #da1414;
`;

export const StyledContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 320px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);
  @media screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
  }
  @media screen and (min-width: 1440px) {
    width: 400;
    height: 400;
  }
`;
export const StyledImgBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
  width: 50px;
  height: 50px;
  border-radius: 6px;
`;
export const StyledInputFile = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const StyledFildWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  width: 335px;
  @media screen and (min-width: 768px) {
    gap: 40px;
    width: 352px;
  }
  @media screen and (min-width: 1440px) {
    width: 393px;
  }
`;

export const StyledInputWrapper = styled.div`
  position: relative;
  display: block;
`;

