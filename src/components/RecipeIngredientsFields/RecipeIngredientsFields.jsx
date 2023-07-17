import React from 'react';
import { useSelector } from 'react-redux';
import { selectIngredients } from 'redux/selectors';
import {
  FieldsInputWrp,
  FormWrapper,
  IngredientsItem,
  TitleStyled,
  TitleWrp,
  UnitWrp,
  IngredientUnit,
  SelectIngredientStyled,
  UnitQuantity,
  DeleteButton,
  CloseIconButton,
} from './RecipeIngredientsFields.styled';
import Counter from './Counter/Counter';
import { listUnits } from './ListUnits.constants';

export const RecipeIngredientsFields = ({
  cocktailIngredientList,
  handleIncIngredient,
  handleDecIngredient,
  handleOnDeleteIngredient,
  handleOnChangeIngredientName,
  handleOnChangeIngredientUnit,
  handleOnChangeUnitQuantity,
}) => {
  const ingredientsList = useSelector(selectIngredients);

  return (
    <FormWrapper>
      <TitleWrp>
        <TitleStyled>Ingredients</TitleStyled>
        <Counter
          handleInc={handleIncIngredient}
          handleDec={handleDecIngredient}
          list={cocktailIngredientList}
        />
      </TitleWrp>
      <ul>
        {cocktailIngredientList?.map((el, index) => (
          <IngredientsItem key={el._id}>
            <FieldsInputWrp>
              <SelectIngredientStyled
                options={ingredientsList}
                isSearchable={true}
                classNamePrefix="react-select"
                onChange={evt => handleOnChangeIngredientName(evt, index)}
                required
              />
              <UnitWrp>
                <UnitQuantity
                  type="number"
                  min="0"
                  onChange={e => {
                    handleOnChangeUnitQuantity(e, index);
                  }}
                  name={`uniCount${index}`}
                  placeholder="0"
                />
                <IngredientUnit
                  options={listUnits}
                  isSearchable={false}
                  classNamePrefix="react-select"
                  onChange={e => {
                    handleOnChangeIngredientUnit(e, index);
                  }}
                  required
                />
              </UnitWrp>
            </FieldsInputWrp>
            <DeleteButton onClick={handleOnDeleteIngredient(index)}>
              <CloseIconButton />
            </DeleteButton>
          </IngredientsItem>
        ))}
        ;
      </ul>
    </FormWrapper>
  );
};
