import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  StyledIngredientsList,
} from './RecipeIngredientsFields.styled';
import Counter from './Counter/Counter';
import { listUnits } from './ListUnits.constants';
import { getIngredientsListThunk } from 'redux/Cocktails/cocktailsOperations';

export const RecipeIngredientsFields = ({
  cocktailIngredientList,
  handleIncIngredients,
  handleDecIngredients,
  handleOnDeleteIngredient,
  handleOnChangeIngredientName,
  handleOnChangeIngredientUnit,
  handleOnChangeUnitQuantity,
}) => {
  const dispatch = useDispatch();

  useEffect(()=> {
   dispatch(getIngredientsListThunk());
  }, [dispatch]);

  const ingredientsList = useSelector(selectIngredients);
  console.log(ingredientsList);


  return (
    <FormWrapper>
      <TitleWrp>
        <TitleStyled>Ingredients</TitleStyled>
        <Counter
          handleIncIngredients={handleIncIngredients}
          handleDecIngredients={handleDecIngredients}
          cocktailIngredientList={cocktailIngredientList}
        />
      </TitleWrp>
      <StyledIngredientsList>
        {cocktailIngredientList?.map((el, index) => (
          <IngredientsItem key={el._id}>
            <FieldsInputWrp>
              <SelectIngredientStyled
                options={ingredientsList.map(ing => {
                  return {value: ing._id, label:  ing.title}
                })}
      
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
            <DeleteButton onClick={()=> handleOnDeleteIngredient(index)}>
              <CloseIconButton />
            </DeleteButton>
          </IngredientsItem>
        ))}
      </StyledIngredientsList>
    </FormWrapper>
  );
};
