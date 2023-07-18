import styled from 'styled-components';
import Select from 'react-select';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 44px;

  width: 343px;

  @media screen and (min-width: 768px) {
    width: 704px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    width: 609px;
  }
`;

export const TitleWrp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;
export const TitleStyled = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: ${props => props.theme.textColor};
`;
export const FieldsInputWrp = styled.div`
  display: flex;
`;

export const IngredientsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const SelectIngredientStyled = styled(Select)`
  & .react-select__control {
    margin-right: 14px;

    width: 190px;
    height: 53px;

    background: var(--input-bg);

    border: none;
    outline: none;
    box-shadow: none;
    border-radius: 6px;

    @media (min-width: 768px) {
      margin-right: 32px;

      width: 398px;
      height: 59px;

      //font-size: 18px;
    }

    &--is-focused,
    &--menu-is-open {
      outline: none;
      //border: 1px solid transparent;
    }

    &:focus,
    &:active,
    &:hover,
    &::selection {
      outline: none;
      //border-color: transparent;
      //box-shadow: 0 0 0 1px transparent;
    }
  }

  // стилизует инпут выпадающего списка ================
  & .react-select__single-value {
    // стилизует текст ================
    text-align: left;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: var(--black);
    opacity: 0.5;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }

  & .react-select__value-container {
    // стилизует контейнер ================
    padding-left: 12px;
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
      //box-shadow: 0 0 0 1px transparent;
    }
  }

  // стилизует выпадающий список ================
  & .react-select__menu-list {
    margin-top: 0;
    padding: 0;

    height: 160px;

    border-radius: 6px;

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  & .react-select__menu {
    margin: 0;
    padding: 8px 0 8px 6px;

    width: 192px;

    border-radius: 6px;
    background-color: var(--white);
    box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.03);

    @media (min-width: 768px) {
      width: 398px;
    }
  }

  // стилизует опции внутри списка ================
  & .react-select__option {
    margin-bottom: -12px;

    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.5);

    background-color: var(--white);
    transition: color  var(--transition-function);

    @media (min-width: 768px) {
      font-size: 14px;
    }

    &:focus,
    &:active,
    &:hover,
    &::selection {
      color: var(--primary-green);
    }
  }
  // =========================================

  // стилизует стрелочку выпадающего списка ================
  /* & .react-select__indicators {
    height: 20px;
    padding: 0;

    @media (min-width: 768px) {
      height: 15px;
    }
  } */

  & .react-select__dropdown-indicator {
    /* display: none; */

    /* padding: 0; */
    color: var(--primary-green);
    outline: none;
    &:focus,
    &:active,
    &:hover,
    &::selection {
      /* padding: 0; */
      color: var(--primary-green);
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

export const UnitWrp= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //gap: 5px;

  //margin-right: 10px;
  padding: 0 5px;

  width: 100px;
  height: 53px;

  background: var(--input-bg);
  border-radius: 6px;

  @media (min-width: 768px) {
    width: 110px;
    height: 59px;
  }
`;

export const UnitQuantity = styled.input`
  width: 50px;
  height: 53px;
  //padding-left: 5px;

  font-size: 14px;
  text-align: right;
  color: rgba(0, 0, 0, 0.5);

  border: none;
  background-color: var(--input-bg);
  border-radius: 6px 0 0 6px;

  transition: color  var(--transition-function);

  @media (min-width: 768px) {
    width: 52px;
    height: 59px;
    font-size: 18px;
  }

  &:focus,
  &:active,
  &:hover,
  &::selection {
    outline: none;
    border-color: transparent;
    color: var(--black);
    //box-shadow: 0 0 0 1px transparent;
  }
`;

export const IngredientUnit = styled(Select)`
  & .react-select__control {
    width: 59px;
    height: 53px;

    background-color: var(--input-bg);

    border: none;
    outline: none;
    box-shadow: none;

    &--is-focused,
    &--menu-is-open {
      outline: none;
      //border: 1px solid transparent;
    }

    &:focus,
    &:active,
    &:hover,
    &::selection {
      outline: none;
      border-color: transparent;
      //box-shadow: 0 0 0 1px transparent;
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
    color: rgba(0, 0, 0, 0.5);

    @media (min-width: 768px) {
      width: 50px;
      font-size: 18px;
    }
  }

  & .react-select__value-container {
    //margin-right: 5px;
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
      //box-shadow: 0 0 0 1px transparent;
    }
  }

  // стилизует выпадающий список ================
  & .react-select__menu-list {
    margin-top: 0;
    padding: 0;

    height: 104px;

    border-radius: 6px;

    @media (min-width: 768px) {
      height: 114px;
      font-size: 14px;
    }
  }

  & .react-select__menu {
    margin-top: 0;
    margin-left: -26px;
    padding: 0;
    border-radius: 6px;

    width: 84px;

    border-radius: 6px;
    background-color: var(--white);
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
    color: rgba(0, 0, 0, 0.5);
    text-align: center;

    background-color: var(--white);
    transition: color  var(--transition-function);

    @media (min-width: 768px) {
      font-size: 14px;
    }

    &:focus,
    &:active,
    &:hover,
    &::selection {
      color: var(--primary-green);
    }
  }
  // =========================================

  // стилизует стрелочку выпадающего списка ================
  /* & .react-select__indicators {
    height: 20px;
    padding: 0;

    @media (min-width: 768px) {
      height: 15px;
    }
  } */

  & .react-select__dropdown-indicator {
    padding: 0 5px 0 0;
    color: var(--primary-green);
    outline: none;

    transition: color  var(--transition-function);

    &:focus,
    &:active,
    &:hover,
    &::selection {
      /* padding: 0; */
      color: var(--primary-green);
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

  cursor: pointer;

  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;



