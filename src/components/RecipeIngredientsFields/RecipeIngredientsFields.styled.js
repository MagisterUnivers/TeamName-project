import Select from 'react-select';
import { devices } from 'constants';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
  width: 335px;

  @media ${devices.tablet} {
    width: 704px;
    margin-left: 0;
    margin-right: 0;
  }

  @media ${devices.desktop} {
    width: 540px;
    margin-right: auto;
  }
`;

export const TitleWrp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const TitleStyled = styled.h3`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14;
  color: ${props => props.theme.textColor};

  @media ${devices.tablet} {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const StyledIngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media ${devices.tablet} {
    gap: 24px;
  }
`;

export const FieldsInputWrp = styled.div`
  display: flex;
  gap: 8px;
  margin-right: 8px;

  @media ${devices.tablet} {
    gap: 14px;
    margin-right: 188px;
  }

  @media ${devices.desktop} {
    margin-right: 40px;
  }
`;

export const IngredientsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${devices.tablet} {
    justify-content: space-between;
  }
`;

export const SelectIngredientStyled = styled(Select)`
  & .react-select__control {
    width: 200px;
    height: 50px;
    background: transparent;
    border-radius: 200px;
    border: 1px solid;
    border-color: ${props => props.theme.secondBorderColor};
    outline: none;
    box-shadow: none;
    transition: border-color 400ms ease;
    cursor: pointer;

    @media (min-width: 768px) {
      gap: 14px;
      width: 332px;
      height: 56px;
      padding: 10px 24px;
    }

    @media ${devices.desktop} {
      width: 316px;
    }

    &--is-focused,
    &--menu-is-open {
      outline: none;
    }

    &:focus,
    &:active,
    &:hover,
    &::selection {
      outline: none;
      border-color: ${props => props.theme.hoverBorderColor};
    }
  }

  // стилизует инпут выпадающего списка ================
  & .react-select__single-value {
    // стилизует текст ================
    text-align: left;
    width: 200px;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${props => props.theme.textColor};

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }

  & .react-select__value-container {
    // стилизует контейнер ================
    padding-left: 12px;
    width: 192px;

    @media (min-width: 768px) {
      padding-left: 14px;
    }
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
    margin-top: 0;
    padding: 0;
    width: 185px;
    height: 160px;
    border-radius: 20px;
    color: white;

    @media (min-width: 768px) {
      font-size: 14px;
      width: 332px;
    }

    @media ${devices.desktop} {
      width: 316px;
    }
  }

  & .react-select__menu {
    margin: 0;
    padding: 8px 0 8px 6px;
    width: 192px;
    border-radius: 20px;
    background-color: ${props => props.theme.secondBgrColor};
    color: white;
    box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.03);

    @media (min-width: 768px) {
      width: 332px;
    }

    @media ${devices.desktop} {
      width: 316px;
    }
  }

  // стилизует опции внутри списка ================
  & .react-select__option {
    margin-bottom: -12px;

    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;

    background-color: ${props => props.theme.secondBgrColor};
    transition: color var(--transition-function);

    @media (min-width: 768px) {
      font-size: 14px;
    }

    &:focus,
    &:active,
    &:hover,
    &::selection {
      color: ${props => props.theme.textColor};
      background-color: ${props => props.theme.secondBgrColor};
    }
  }
  // =========================================

  // стилизует стрелочку выпадающего списка ================
  & .react-select__dropdown-indicator {
    color: ${props => props.theme.textColor};
    outline: none;
    &:focus,
    &:active,
    &:hover,
    &::selection {
      color: #4070cd;
      outline: none;
    }
  }
  // =========================================

  & .react-select__indicator-separator {
    display: none;
  }

  & .react-select__placeholder {
    display: none;
  }
`;

export const UnitWrp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  padding: 16px 12px;

  width: 101px;
  height: 50px;

  background: transparent;
  border-radius: 200px;
  border: 1px solid;
  border-color: ${props => props.theme.secondBorderColor};
  transition: border-color 400ms ease;

  @media (min-width: 768px) {
    width: 150px;
    height: 56px;
    padding: 15px 20px;
  }

  &:hover,
  &:focus {
    border-color: ${props => props.theme.hoverBorderColor};
  }
`;

export const UnitQuantity = styled.input`
  width: 27px;
  height: 27px;
  font-size: 14px;
  color: ${props => props.theme.textColor};
  border: none;
  background-color: var(--input-bg);
  border-radius: 6px 0 0 6px;
  text-align: center;
  transition: color cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;

  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 18px;
  }

  &:focus,
  &:active,
  &:hover,
  &::selection {
    outline: none;
    border-color: transparent;
  }
`;

export const IngredientUnit = styled(Select)`
  & .react-select__control {
    width: 59px;
    height: 53px;
    background-color: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    cursor: pointer;

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

    @media (min-width: 768px) {
      height: 59px;
      font-size: 18px;
    }
  }

  & .react-select__single-value {
    margin: 0;
    padding: 0 4px;

    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    text-align: left;
    color: ${props => props.theme.textColor};

    @media (min-width: 768px) {
      width: 50px;
      font-size: 18px;
    }
  }

  & .react-select__value-container {
    padding: 0;
  }

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
    margin-top: 0;
    padding: 0;
    height: 104px;
    border-radius: 20px;
    color: white;

    @media (min-width: 768px) {
      height: 114px;
      font-size: 14px;
    }
  }

  & .react-select__menu {
    margin-top: -2px;
    margin-left: -26px;
    padding: 0;
    width: 84px;
    border-radius: 20px;
    background-color: ${props => props.theme.secondBgrColor};
    color: white;
    box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.03);

    @media (min-width: 768px) {
      margin-left: -52px;
      width: 110px;
    }
  }

  // стилизует опции внутри списка ================
  & .react-select__option {
    margin-bottom: -12px;

    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    text-align: center;

    background-color: ${props => props.theme.secondBgrColor};
    transition: color var(--transition-function);

    @media (min-width: 768px) {
      font-size: 14px;
    }

    &:focus,
    &:active,
    &:hover,
    &::selection {
      color: ${props => props.theme.textColor};
      background-color: ${props => props.theme.secondBgrColor};
    }
  }
  // =========================================

  // стилизует стрелочку выпадающего списка ================

  & .react-select__dropdown-indicator {
    padding: 0 5px 0 0;
    color: ${props => props.theme.textColor};
    outline: none;

    &:focus,
    &:active,
    &:hover,
    &::selection {
      color: #4070cd;
      outline: none;
    }
  }

  & .react-select__indicator-separator {
    display: none;
  }

  & .react-select__placeholder {
    display: none;
  }
`;

export const CloseIconButton = styled(CloseIcon)`
  width: 18px;
  height: 18px;
  stroke: ${props => props.theme.textColor};

  cursor: pointer;

  @media ${devices.tablet} {
    width: 20px;
    height: 20px;
  }
`;

// крестик btn ==================
export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 18px;
  height: 18px;

  border: none;
  background-color: transparent;

  cursor: pointer;

  @media ${devices.tablet} {
    width: 20px;
    height: 20px;
  }
`;
