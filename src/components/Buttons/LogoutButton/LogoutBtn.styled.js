import { styled } from 'styled-components'; 

export const StyledButton = styled.button`
width: 141px;
border-radius: 42px;
border: 1px solid rgba(243, 243, 243, 0.20);
background: transparent;
display: flex;
padding: 12px 45px;
align-items: center;
color: #F3F3F3;
font-size: 13px;
font-style: normal;
font-weight: 600;
line-height: 1.28;
outline: none;
cursor: pointer;
transition: 0.3s ease; 

&:hover{
    background: #F3F3F3;
    color: #161F37;
}

`