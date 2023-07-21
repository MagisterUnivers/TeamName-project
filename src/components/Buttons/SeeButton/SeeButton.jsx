import { useNavigate } from 'react-router-dom';
import { SeeButtonStyled } from './SeeButton.styled';

export const SeeButton = ({ id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/main/recipe/${id}`);
  };
  return <SeeButtonStyled onClick={handleClick}>See recipe</SeeButtonStyled>;
};
