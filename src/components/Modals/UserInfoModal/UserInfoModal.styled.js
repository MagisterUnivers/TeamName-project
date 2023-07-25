import { Formik, Form, Field } from 'formik';
import { devices } from 'constants';
import styled from 'styled-components';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { RiErrorWarningLine } from 'react-icons/ri';
import pencilIcon from '../../../assets/icons/modals/user-info/edit-2.svg';
import { ReactComponent as CloseButtonIcon } from '../../../assets/icons/forIco.svg';

export const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 150px;
`;

export const ContentWrapper = styled.div`
  background-color: ${props => props.theme.secondBgrColor};
  border-radius: 16px;
  width: 335px;
  height: 345px;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 500px;
    height: 426px;
  }
`;
export const CloseButton = styled.button`
  margin-top: 14px;
  margin-left: 297px;
  margin-bottom: 12px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    margin-top: 18px;
    margin-left: 450px;
    margin-right: 0;
  }
`;

export const StyledForm = styled(Formik)``;
export const StyledFormInsight = styled(Form)`
  max-width: 285px;
  height: auto;
  margin: 0px 25px 50px 25px;
  @media screen and (min-width: 768px) {
    max-width: 400px;
    margin: 0px 50px 75px 50px;
  }
`;

export const UserAvatarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 100px;
    margin: 0 auto;
  }
`;
export const AvatarFrame = styled.img`
  position: absolute;
  z-index: 1;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border-radius: 50%;
  cursor: pointer;
  background-image: url({defaultAvatarURL});
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;
export const StyledInputFile = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;
export const AddIconImg = styled.img`
  position: absolute;
  z-index: 3;
  width: 28px;
  height: 28px;
  top: 64px;
  left: 35%;
  border-radius: 50%;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    top: 83px;
  }
`;
export const StyledInputWrap = styled.div`
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`;
export const StyledIconError = styled(RiErrorWarningLine)`
  position: absolute;
  right: 24px;
  top: 70%;
  transform: translateY(-50%);
  @media screen and (min-width: 768px) {
    top: 75%;
  }
`;
export const StyledIconChecked = styled(IoIosCheckmarkCircleOutline)`
  position: absolute;
  right: 24px;
  top: 70%;
  transform: translateY(-50%);
  @media screen and (min-width: 768px) {
    top: 75%;
  }
`;

export const StyledInput = styled(Field)`
  margin-top: 93px;
  width: 100%;
  height: 54px;
  border-radius: 200px;
  border: 1px solid ${props => props.theme.borderColor};
  opacity: 0.800000011920929;
  background-color: transparent;
  padding: 18px 24px;
  padding-right: 50px;
  color: ${props => props.theme.secondaryTextColor};
  font-size: 14px;
  font-weight: 400;
  line-height: calc(18 / 14);
  @media screen and (min-width: 768px) {
    margin-top: 136px;
    height: 56px;
    padding: 14px 24px;
    padding-right: 10px;
    font-size: 17px;
    line-height: calc(18 / 17);
  }
  &:focus,
  &:hover {
    outline: none;
    color: ${props => props.theme.textColor};
    border-color: ${props => props.theme.secondBorderColor};
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
  &::after {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(${pencilIcon});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
  }
`;

export const SaveChangeButton = styled.button`
  margin-top: 18px;
  width: 100%;
  display: block;
  padding: 18px 90px;
  outline: none;
  border: none;
  border-radius: 42px;
  background-color: ${props => props.theme.textColor};
  color: ${props => props.theme.bgrColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29;
  transition: 0.5s ease;
  &:hover {
    background-color: ${props => props.theme.bgrColor};
    color: ${props => props.theme.textColor};
  }
  @media screen and (min-width: 768px) {
    margin-top: 25px;
    padding: 18px 143px;
    font-size: 16px;
    line-height: 1.13;
  }
`;

export const StyledUpdatedCloseButton = styled(CloseButtonIcon)`
  width: 24px;
  height: 24px;
  fill: ${props =>
    props.theme === 'dark' ? props.theme.bgrColor : props.theme.textColor};

  @media ${devices.tablet} {
    width: 32px;
    height: 32px;
  }

  &:hover {
    fill: red;
  }
`;
