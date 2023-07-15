import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
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

export const StyledField = styled(Field)`
  width: 100%;
  height: 34px;
  border: none;
  border-bottom: 1px solid rgba(243, 243, 243, 0.5);
  background-color: transparent;
  outline: none;
  color: rgba(243, 243, 243, 0.5);
  padding-bottom: 14px;

  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  cursor: pointer;

  @media (min-width: 768px) {
    padding-bottom: 18px;
    height: 41px;
  }

  &:focus,
  &:active,
  &:hover,
  &::selection {
    outline: none;
  }
`;

export const StyledError = styled(ErrorMessage)`
  margin-top: 5px;
  font-size: 11px;
  font-weight: 400;
  line-height: calc (14 / 11);
  color: #da1414;
`;

export const StyledImgBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
  width: 50px;
  height: 50px;
  border-radius: 6px;
  margin: 0;
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

export const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const StyledImgLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 320px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
  }
  @media screen and (min-width: 1440px) {
    width: 400;
    height: 400;
  }
`;

export const StyledImageInput = styled.input`
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
`;

export const StyledWrapperSelect = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: start;
  height: 34px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(243, 243, 243, 0.5);
  @media (min-width: 768px) {
    padding-bottom: 18px;
    height: 41px;
  }
`;

export const StyledLabelSelect = styled.label`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  cursor: pointer;
`;

export const StyledSelect = styled(Select)`
  & .react-select__control {
    /* width: 123px;
    height: 25px; */
    border: none;
    outline: none;
    box-shadow: none;
    align-items: center;
    background-color: transparent;
    gap: 8px;

    &--is-focused,
    &--menu-is-open {
      outline: none;
    }

    &:focus,
    &:active,
    &:hover,
    &::selection {
      outline: none;
      border-color: transparent;
    }
  }

  // стилизует инпут выпадающего списка ================
  & .react-select__single-value {
    // стилизует текст ================
    font-weight: 500;
    font-size: 14px;
    line-height: 1;
    text-align: right;
    letter-spacing: -0.02em;
    color: black;
    color: #f3f3f3;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  & .react-select__value-container {
    padding: 0;
    align-items: start;
    // стилизует контейнер ================
  }
  // =========================================

  & .react-select-container {
    box-shadow: none;
    outline: none;
    border-color: transparent;
    // box-shadow: none;

    &:focus,
    &:active,
    &:hover,
    &::selection {
      outline: none;
      border-color: transparent;
    }
  }
  // стилизует выпадающий список ================
  & .react-select__menu-list {
    margin-top: 0;
    padding: 0;
    height: 170px;
    text-align: left;
    border-radius: 20px;
    color: #f3f3f3;

    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 8px;

    @media (min-width: 768px) {
      height: 170px;
    }
  }

  & .react-select__menu {
    width: 131px;
    border-radius: 20px;
    background-color: #161f37;
    color: #f3f3f3;
    @media (min-width: 768px) {
      width: 139px;
    }
    @media (min-width: 1440px) {
      width: 154px;
    }
  }

  // стилизует опции внутри списка ================
  & .react-select__option {
    color: #f3f3f3;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: calc(16 / 12);
    background-color: #161f37;

    &:focus,
    &:active,
    &:hover,
    &::selection {
      color: #f3f3f3;
      background-color: #161f37;
    }
  }
  // =========================================

  // стилизует стрелочку выпадающего списка ================
  & .react-select__indicators {
    height: 20px;
    display: flex;
    align-items: center;
  }

  & .react-select__dropdown-indicator {
    padding: 0;
    color: #f3f3f3;
    outline: none;
    /* transition: transform 0.2s; */
    align-items: center;

    &:focus,
    &:hover,
    &::selection,
    &:active
   {
      padding: 0;
      /* transform: rotate(180deg); */
      color: #f3f3f3;
      outline: none;
    }
  }
  // =========================================

  & .react-select__indicator-separator {
    display: none;
  }

  & .react-select__placeholder {
    color: #f3f3f3;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: calc(14 / 14);
  }
`;
