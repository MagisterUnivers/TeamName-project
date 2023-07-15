import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { deleteUser } from "redux/users/usersOperation"
import { ModalWrapper, ModalContent, CancelButton } from './ConfirmLogout.styled';

const ConfirmLogout = ({id, onClose})=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleDelete = ()=>{
        dispatch(deleteUser(id));
        navigate('/users');
    }

    return(
        <ModalWrapper>
            <ModalContent>
            Are you sure you want to log out?
            <LogOutLink>Log out</LogOutLink>
            <CancelButton onClick={onClose}>Cancel</CancelButton>
            </ModalContent>
        `</ModalWrapper>
    )
}
export default ConfirmLogout 