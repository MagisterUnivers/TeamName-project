import React from 'react';
import { StyledAddButton } from './AddRecipe.styled';
import { useNavigate } from 'react-router';

export const AddRecipe = () => {
  const navigate = useNavigate();

  return (
    <StyledAddButton
      onClick={() => {
        navigate('/main/add');
      }}
    >
      Add recipe
    </StyledAddButton>
  );
};
