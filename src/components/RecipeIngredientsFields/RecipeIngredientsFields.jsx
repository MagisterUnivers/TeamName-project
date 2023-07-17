import React from 'react';
import { useSelector } from 'react-redux';
import { selectIngredients } from 'redux/selectors';
import { FieldsInputWrp, FormWrapper, IngredientsItem, TitleStyled, TitleWrp, UnitWrp, IngredientUnit, SelectIngredientStyled, UnitQuantity, DeleteButton, CloseIconButton } from './RecipeIngredientsFields.styled';
import Counter from './Counter/Counter';
import { listUnits } from './ListUnits.constants';

export const RecipeIngredientsFields = ({
  cocktailIngredientList,
  handleIncIngredient,
  handleDecIngredient,
  handleOnDeleteIngredient,
  handleOnChangeIngName,
  handleOnChangeIngUnit,
  handleOnChangeUnitCount,
}) => {
  const ingredientsList = useSelector(selectIngredients);

  return (
    <FormWrapper>
      <TitleWrp>
        <TitleStyled>Ingredients</TitleStyled>
        <Counter/>
      </TitleWrp>
      <ul>
        { cocktailIngredientList?.map((el, index) => (
          <IngredientsItem  key={el._id}>
            <FieldsInputWrp>
            <SelectIngredientStyled
            options={ingredientsList}
            isSearchable={true}
            classNamePrefix="react-select"
            // onChange={evt => handleOnChangeIngSelector(evt, index)}
            required
            />
            <UnitWrp>
              <UnitQuantity
                  type="number"
                  min="0"
                  // onChange={e => {
                  //   handleOnChangeUnitQuantity(e, index);
                  // }}
                  name={`uniCount${index}`}
                  placeholder="0"
                />
                <IngredientUnit
                  options={listUnits}
                  isSearchable={false}
                  classNamePrefix="react-select"
                  // onChange={e => {
                  //   handleOnChangeIngUnit(e, index);
                  // }}
                  required
                  />
            </UnitWrp>
            </FieldsInputWrp>
            <DeleteButton 
            // onClick={handleOnDeleteIngredient}
            >
                  <CloseIconButton />
                </DeleteButton>
          </IngredientsItem>
          )   
        )};
      </ul>
    </FormWrapper>
  );
};


