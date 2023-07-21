import { Formik, Form, Field, ErrorMessage } from 'formik';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { RiErrorWarningLine } from 'react-icons/ri';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import styled from 'styled-components';
import { devices } from 'constants/breakpoints';

export const StyledForm = styled(Formik)``;
export const StyledFormInsight = styled(Form)`
  max-width: 375px;
  width: 100%;
  height: auto;

  @media ${devices.tablet} {
    max-width: 400px;
  }
`;
export const StyledTitle = styled.h2`
  color: #f3f3f3;
  font-size: 28px;
  font-weight: 600;
  line-height: calc(32 / 28);
  letter-spacing: -0.56px;
  margin-bottom: 28px;

  @media ${devices.tablet} {
    font-size: 40px;
    line-height: calc(44 / 40);
    letter-spacing: -0.8px;
  }
`;
export const StyledInputWrap = styled.div`
  width: 100%;
  position: relative;

  @media ${devices.tablet} {
    max-width: 400px;
  }
`;
export const StyledIconError = styled(RiErrorWarningLine)`
  position: absolute;
  right: 24px;
  top: 36%;
  transform: translateY(-50%);
`;
export const StyledIconChecked = styled(IoIosCheckmarkCircleOutline)`
  position: absolute;
  right: 24px;
  top: 36%;
  transform: translateY(-50%);
`;
export const StyledAiOutlineEye = styled(AiOutlineEye)`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
`;
export const StyledAiOutlineEyeInvisible = styled(AiOutlineEyeInvisible)`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
`;

export const StyledInput = styled(Field)`
  width: 100%;
  height: 54px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  opacity: 0.800000011920929;
  background-color: transparent;
  padding: 18px 24px;
  padding-right: 50px;
  color: #f3f3f3;
  font-size: 14px;
  font-weight: 400;
  line-height: calc(18 / 14);

  &::placeholder {
    color: rgba(243, 243, 243, 0.5);
  }

  @media ${devices.tablet} {
    height: 56px;
    padding: 14px 24px;
    padding-right: 50px;
    font-size: 17px;
    line-height: calc(18 / 17);
  }

  &:focus,
  &:hover {
    outline: none;
    color: #f3f3f3;
    border-color: rgba(243, 243, 243, 0.5);
    background-color: transparent;
  }
  &.valid-border {
    border-color: green;
    outline: none;
    background-color: transparent;
  }
  &.invalid-border {
    border-color: red;
    outline: none;
    background-color: transparent;
  }
`;
export const StyledButton = styled.button`
  width: 100%;
  height: 54px;
  /* padding: 18px 141px; */
  border: none;
  justify-content: center;
  border-radius: 42px;
  background: #f3f3f3;
  color: #161f37;
  font-size: 14px;
  font-weight: 600;
  line-height: calc (18 / 14);
  margin-bottom: 14px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    text-decoration: underline;
    box-shadow: 1px 0px 3px 4px rgba(35, 93, 171, 0.4) inset;
  }

  @media ${devices.tablet} {
    padding: 18px 169px;
    font-size: 16px;
    line-height: calc (18 / 16);
  }
`;

export const StyledError = styled(ErrorMessage)`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: calc (14 / 12);
  color: #da1414;
  margin-left: 24px;
`;

export const StyledInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 28px;

  @media ${devices.tablet} {
    margin-bottom: 40px;
  }
`;
export const StyledMessage = styled.p`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: calc (14 / 12);
  color: #3cbc81;
  margin-left: 24px;
`;

export const StyledPasswordDiv = styled.div`
  position: relative;
`;
