import React from 'react';
import { StyledAddButton } from './AddYourCocktail.styled';
import { useNavigate } from 'react-router';

export const AddYourCocktail = () => {
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
