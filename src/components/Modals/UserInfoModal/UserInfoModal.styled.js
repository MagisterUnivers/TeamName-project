import styled from 'styled-components';

export const ModalWrapper = styled.div`
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
height: 32px;;
  }
`;
export const UserWrapper = styled.div`
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