import styled from 'styled-components';
import Select from 'react-select';
import { devices } from 'constants/breakpoints';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

export const SearchFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media ${devices.tablet} {
    flex-direction: row;
    align-items: baseline;
    gap: 8px;
  }
`;

export const QueryFormStyled = styled.form`
  display: flex;
  align-items: center;
`;
export const InputStyled = styled.input`
  width: 290px;
  height: 50px;
  background: transparent;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.theme.borderColor};
  opacity: 0.8;
  outline: none;
  box-shadow: none;
  border-radius: 200px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;
  padding-left: 24px;
  padding-top: 18px;
  padding-bottom: 18px;
  /* color: #f3f3f3; */
  color: ${props => props.theme.textColor};
  font-size: 14px;
  font-weight: 400;
  line-height: calc(18 / 14);
  @media ${devices.tablet} {
    width: 210px;
    height: 56px;
    padding-left: 32px;
    padding-top: 14px;
    padding-bottom: 14px;
    font-size: 17px;
    line-height: calc(26 / 17);
  }
  &::placeholder {
    padding-top: 18px;
    padding-bottom: 18px;
    padding-left: 4px;
    /* color: #f3f3f3; */
    color: ${props => props.theme.textColor};
    font-size: 14px;
    font-weight: 400;
    line-height: calc(18 / 14);
    @media ${devices.tablet} {
      padding-top: 14px;
      padding-bottom: 14px;
      padding-left: 8px;
      font-size: 17px;
      line-height: calc(26 / 17);
    }
  }
`;
export const StyledSearchButton = styled.button`
  position: relative;
  width: 0px;
  height: 50px;
  display: flex;
  border-top-right-radius: 200px;
  border-bottom-right-radius: 200px;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.theme.borderColor};
  border-left: 0;
  background: transparent;
  opacity: 0.800000011920929;
  outline: none;
  box-shadow: none;
  padding-right: 44px;
  padding-top: 14px;
  padding-bottom: 28px;
  @media ${devices.tablet} {
    width: 0px;
    height: 56px;
    padding-top: 17px;
  }
`;
export const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 16px;
  left: 4px;
  stroke: ${props => props.theme.textColor};
  background-color: transparent;
  @media ${devices.tablet} {
    top: 17px;
    left: 4px;
  }
`;
export const HoverWrapper = styled.div`
  position: absolute;
  top: 9px;
  left: -3px;
  width: 35px;
  height: 35px;
  padding-bottom: 20px;
  border-radius: 50px;
  background-color: transparent;
  transition: background-color 0.4s ease;
  box-shadow: rgba(0, 0, 0, 0) 0px 1px 4px;
  &:hover {
    background-color: ${props => props.theme.paginationAccentColor};
    box-shadow: rgba(0, 0, 0, 0.26) 0px 1px 4px;
  }
  ${StyledSearchButton}:hover & {
    background-color: ${props => props.theme.paginationAccentColor};
    box-shadow: rgba(0, 0, 0, 0.26) 0px 1px 4px;
  }
  @media ${devices.tablet} {
    top: 11px;
    left: -2px;
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
    &--is-focused {
      outline: none;
      cursor: text;
    }
    @media ${devices.tablet} {
      width: 199px;
      height: 56px;
    }
    @media ${devices.desktop} {
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
    padding-left: 24px;
    color: #f3f3f3;
    font-size: 14px;
    font-weight: 400;
    line-height: calc(18 / 14);
    @media ${devices.tablet} {
      padding-top: 14px;
      padding-bottom: 14px;
      font-size: 17px;
      line-height: calc(26 / 17);
    }
  }
  & .react-select__input-container {
    // стилизует текст при прямом вводе ================
    color: #f3f3f3;
    padding-left: 24px;
    margin-right: 24px;
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
    &:focus-within {
      color: #f3f3f3;
    }
    @media ${devices.tablet} {
      padding-top: 14px;
      padding-bottom: 14px;
      font-size: 17px;
      line-height: calc(26 / 17);
    }
  }
  & .react-select__value-container {
    // стилизует контейнер ================
  }
  // =========================================
  & .react-select-container {
    box-shadow: none;
    outline: none;
    border-color: transparent;
    border-radius: 20px;
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
    max-height: 335px;
    border-radius: 20px;
    width: 314px;
    @media ${devices.tablet} {
      height: 405px;
      width: 177px;
    }
  }
  & .react-select__menu {
    margin: 4px;
    padding-left: 14px;
    width: 335px;
    border-radius: 20px;
    background-color: #161f37;
    @media ${devices.tablet} {
      width: 199px;
      max-height: 405px;
    }
  }
  // стилизует опции внутри списка ================
  & .react-select__option {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: calc(18 / 14);
    background-color: #161f37;

    @media ${devices.tablet} {
      font-size: 17px;
      line-height: calc(26 / 17);
    }
    &:focus,
    &:active,
    &:hover,
    &::selection {
      color: #f3f3f3;
      background-color: #161f37;
      cursor: pointer;
    }
  }
  // =========================================
  // стилизует стрелочку выпадающего списка ================
  & .react-select__indicators {
    padding-right: 5px;
    padding-left: 5px;
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
