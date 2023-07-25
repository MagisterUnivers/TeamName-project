import { useNavigate } from 'react-router';
import { StyledAddButton } from './AddRecipe.styled';

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
