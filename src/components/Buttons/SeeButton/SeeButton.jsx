import React from 'react';
import { useNavigate } from 'react-router-dom';

import { SeeButtonStyled } from './SeeButton.styled';

const SeeButton = ({ _id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/main/recipe/${_id}`);
  };
  return <SeeButtonStyled onClick={handleClick}>See recipe</SeeButtonStyled>;
};
export default SeeButton;
