import React from 'react';
import {
  FormWrapper,
  StyledTextArea,
  StyledTitle,
  StyledDiv,
} from './RecipePreparationFields.styled';

 export const RecipePreparationFields = ({ dataField, handleOnInstructions }) => {
  return (
    <FormWrapper>
      <StyledTitle>Recipe Preparation</StyledTitle>
      <StyledDiv>
        <StyledTextArea
          as="textarea"
          name="text"
          placeholder="Enter the recipe"
          value={dataField.join('\n')}
          onChange={handleOnInstructions}
          required
        />
      </StyledDiv>
    </FormWrapper>
  );
};
