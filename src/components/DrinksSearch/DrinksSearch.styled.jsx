import styled from 'styled-components';
import { devices } from 'constants/breakpoints';
import Select from 'react-select';

export const SerachWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  @media ${devices.tablet} {
    flex-direction: row;
    gap: 8px;
  }

  @media ${devices.desktop} {
  }
`;

export const InputStyled = styled.input`
  width: 335px;
  height: 54px;
  margin-bottom: 14px;
  background: transparent;
  border: 1px solid rgba(243, 243, 243, 0.2);
  opacity: 0.800000011920929;
  outline: none;
  box-shadow: none;
  border-radius: 200px;
  padding-left: 24px;
  padding-top: 18px;
  padding-bottom: 18px;
  color: #f3f3f3;
  font-size: 14px;
  font-weight: 400;
  line-height: calc(18 / 14);
  @media ${devices.tablet} {
    width: 199px;
    height: 56px;
    margin-bottom: 40px;
  }

  @media ${devices.desktop} {
  }
  &::placeholder {
    color: #f3f3f3;
  }
`;

export const SelectStyled = styled(Select)`
  & .react-select__control {
    width: 335px;
    height: 54px;
    background: #161f37;
    border: none;
    outline: none;
    box-shadow: none;
    border-radius: 200px;
    cursor: pointer;
    @media ${devices.tablet} {
      width: 199px;
      height: 56px;
    }

    @media ${devices.desktop} {
    }
    &--is-focused,
    &--menu-is-open {
      outline: none;
      cursor: pointer;
    }

    &:focus,
    &:active,
    &:hover,
    &::selection {
      outline: none;
    }
  }
  & .react-select__placeholder {
    // стилизует текст placeholder
    padding-top: 18px;
    padding-bottom: 18px;
    padding-left: 20px;
    color: #f3f3f3;
    font-size: 14px;
    font-weight: 400;
    line-height: calc(18 / 14);
  }
  // стилизует инпут выпадающего списка ================
  & .react-select__single-value {
    // стилизует текст ================
    padding-top: 18px;
    padding-bottom: 18px;
    padding-left: 24px;
    text-align: left;
    font-size: 14px;
    font-weight: 400;
    line-height: calc(18 / 14);
    color: #f3f3f3;
  }

  & .react-select__value-container {
    // стилизует контейнер ================
  }
  // =========================================

  & .react-select-container {
    box-shadow: none;
    outline: none;
    border-color: transparent;

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
    padding-left: 24px;
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
    border-radius: 20px;
  }

  & .react-select__menu {
    margin: 4px;
    width: 335px;
    border-radius: 20px;
    background-color: #161f37;
  }

  // стилизует опции внутри списка ================
  & .react-select__option {
    /* color: rgba(243, 243, 243, 0.40); */
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: calc(16 / 12);
    background-color: #161f37;

    @media (min-width: 1440px) {
      font-size: 14px;
      line-height: calc(18 / 14);
    }

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
    padding-right: 24px;
  }

  & .react-select__dropdown-indicator {
    color: #f3f3f3;
    outline: none;
    &:focus,
    &:active,
    &:hover,
    &::selection {
      /* padding: 0; */
      color: #4070cd;
      outline: none;
    }
  }
  // =========================================

  & .react-select__indicator-separator {
    display: none;
  }
`;
