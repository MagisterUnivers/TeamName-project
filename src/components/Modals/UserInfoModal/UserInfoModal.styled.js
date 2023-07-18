import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { RiErrorWarningLine } from 'react-icons/ri';

export const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  background-color: var(--btn-hover-color);
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
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
export const UserAvatarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 94px;
  margin: 25px auto;
  @media screen and (min-width: 768px) {
    width: 100px;
  height: 134px;
  margin: 50px auto;
  }
`;
export const AvatarFrame = styled.img`
  position: absolute;
  z-index: 1;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 100px;
  height: 100px;
  }
`;
export const AddAvatarButton = styled.img`
  position: absolute;
  z-index: 2;
  width: 28px;
  height: 28px;
  margin: 0 auto;
  top: 64px;
   @media screen and (min-width: 768px) {
    width: 32px;
  height: 32px;
  top: 84px;
  }
`;

export const StyledForm = styled(Formik)``;
export const StyledFormInsight = styled(Form)`
  max-width: 335px;
  height: auto;

  @media screen and (min-width: 768px) {
    max-width: 400px;
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
  top: 36%;
  transform: translateY(-50%);
`;
export const StyledIconChecked = styled(IoIosCheckmarkCircleOutline)`
  position: absolute;
  right: 24px;
  top: 36%;
  transform: translateY(-50%);
`;