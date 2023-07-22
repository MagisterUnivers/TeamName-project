import styled from 'styled-components';
// body {
//     display: flex;
//     justify-content: center;
//   }
export const ModalWrapper = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  
  export const ModalContent = styled.div`
  background-color: var(--btn-hover-color);
  border-radius: 8px;
  width: 177px;
  height: 134px;
  margin: 2px;
`;
export const ModalTitle = styled.div`
      padding: 0.8rem;
    font-size: 1.5rem;
    border-bottom: 1px solid #aaa;
    text-align: center;
    `;
   export const ModalBody= styled.div` 
     padding: 1rem;
     `;
