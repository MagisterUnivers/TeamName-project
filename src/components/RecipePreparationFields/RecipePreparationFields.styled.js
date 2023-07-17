import styled from 'styled-components';
import { Field } from 'formik';

export const FormWrapper = styled.div`
margin-bottom: 20px`;

export const StyledTitle = styled.h2`
  color: #f3f3f3;
  font-size: 28px;
  font-weight: 600;
  line-height: calc(32 / 28);
  display: block;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }
`;

export const StyledTextArea = styled(Field)`
  width: 100%;
  height: 184px;
  padding: 16px 18px;
  border-radius: 20px;
  border: 1px solid rgba(243, 243, 243, 0.5);
  opacity: 0.800000011920929;
  background-color: transparent;
  color: #f3f3f3;
  outline: none;
  font-family: inherit;
  resize: none;
  font-size: 14px;
  line-height: calc(18 / 14);
  font-weight: 400;
  margin: 0;
  transition: border-color 400ms ease;

  &::placeholder {
    color: rgba(243, 243, 243, 0.5);
  }

  &:hover,
  &:focus {
    border-color: #f3f3f3;
  }

  &::-webkit-scrollbar {
    width: 5px;
    display: block;
    margin-top: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(243, 243, 243, 0.5);
    width: 5px;
    border-radius: 20px;
    height: 2px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #f3f3f3;
  }

  @media screen and (min-width: 768px) {
    width: 480px;
    padding: 14px 24px;
    font-size: 17px;
    line-height: 156%;
  }
`;

export const StyledDiv = styled.div`
  width: 100%;
  height: 184px;
  border-radius: 20px;
  padding: 0;
  border: none;
  outline: none;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 480px;
  }
`;
