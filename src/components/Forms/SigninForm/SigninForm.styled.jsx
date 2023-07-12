import { Field, Form } from 'formik';
import { RiErrorWarningLine as ErrorLogo } from 'react-icons/ri';
import { IoIosCheckmarkCircleOutline as DoneLogo } from 'react-icons/io';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledErrorLogo = styled(ErrorLogo)`
  display: ${props => (props.$show ? 'block' : 'none')};
  width: 24px;
  height: 24px;
  position: absolute;
  right: 20px;
  top: 33%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;

  color: red;
`;
export const StyledDoneLogo = styled(DoneLogo)`
  display: ${props => (props.$showerror ? 'none' : 'block')};
  width: 24px;
  height: 24px;
  position: absolute;
  right: 20px;
  top: 33%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;

  color: green;
`;
export const StyledTitle = styled.h2`
  color: #f3f3f3;
  font-family: inherit;
  font-size: 28px;
  line-height: calc(32 / 28);
  font-style: normal;
  font-weight: 600;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
    margin-bottom: 40px;
  }
`;
export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-family: inherit;
  font-weight: 600;
  font-size: 12px;
  line-height: calc(15 / 12);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(17 / 14);
  }
`;
export const StyledHolder = styled.div`
  margin-bottom: 24px;
  &:last-of-type {
    margin-bottom: 32px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;

    margin-bottom: 18px;
    &:last-of-type {
      margin-bottom: 48px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`;
export const StyledTaker = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 400px;
  }
`;
export const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: auto;
  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);
  letter-spacing: -0.02em;
  padding: 18px 141px;
  background: #f3f3f3;
  border-radius: 42px;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 56px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 56px;
  }
`;
export const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 335px;
  transform: translate(-50%, -50%);
  border: transparent;
  background: #ffffff;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    padding: 40px 40px;
    width: 480px;
    /* height: 424px; */
  }
  @media screen and (min-width: 1440px) {
    /* width: 480px;
    height: 424px; */
  }
`;
export const Rel = styled.div`
  position: relative;
`;
export const StyledField = styled(Field)`
  display: block;
  padding: 14px;
  width: 335px;
  height: 54px;
  font-family: inherit;
  font-size: 14px;
  line-height: calc(18 / 14);
  background: #ffffff;
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 200px;

  &.error {
    border-color: red;
  }
  &.success {
    border-color: green;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 54px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 54px;
  }
`;
