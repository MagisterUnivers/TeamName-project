import styled from 'styled-components';

export const BaseDiv = styled.div`
  background-color: #0a0a11;
  width: 100%;
  height: 100%;
  margin: 0;
  padding-left: 36px;
  @media screen and (min-width: 768px) {
    padding-left: 64px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 300px;
  }
`;

export const PicturedWrapper = styled.img`
  position: relative;
  margin-left: auto;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const SummaryWrapper = styled.div`
  border: solid;
  border-color: red;
  position: absolute;
  top: 45%;
  left: 36px;
  transform: translate(0%, -50%);
  z-index: 1;
  width: 335px;
  height: 248px;
  /* top: 304px; */
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    top: 10%;
    left: 15%;
    transform: translate(0%, -50%);
    width: 335px;
    height: 248px;
    padding: 0;
    margin-top: 400px;
    margin-left: 64px;
  }
  @media screen and (min-width: 1440px) {
    top: 0%;
    left: -30%;
    transform: translate(0%, -50%);
    width: 335px;
    height: 248px;
    padding: 0;
    margin-top: 400px;
    margin-left: 64px;
    margin-left: 737px;
  }
`;
export const WelcomeTitle = styled.h1`
  color: red;
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.56px;
  padding-bottom: 14px;
`;
export const WelcomeText = styled.p`
  color: red;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  padding-bottom: 40px;
`;
export const ButtonsBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  border: solid;
  border-color: red;
`;
