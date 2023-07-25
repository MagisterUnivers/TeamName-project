import { useNavigate } from 'react-router';
import { StyledAddButton } from './AddYourCocktail.styled';

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
