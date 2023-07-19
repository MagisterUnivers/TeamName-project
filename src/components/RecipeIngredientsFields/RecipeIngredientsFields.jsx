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

export const RecipeIngredientsFields = ({
  ingredientsList,
  cocktailIngredientList,
  handleIncIngredients,
  handleDecIngredients,
  handleOnDeleteIngredient,
  handleOnChangeIngredientName,
  handleOnChangeIngredientUnit,
  handleOnChangeUnitQuantity,
}) => {
  const styles = {
    menuList: base => ({
      ...base,
      height: '80px',
      '::-webkit-scrollbar': {
        width: '5px',
        height: '80px',
      },
      '::-webkit-scrollbar-track': {
        background: 'transparent',
        margin: '5px',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#434D67',
        height: '80px',
        width: '5px',
        borderRadius: '20px',
        padding: '20px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#434D67',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#f3f3f3' : 'rgba(243, 243, 243, 0.40)',
    }),
  };

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
                  return { value: ing._id, label: ing.title, id: ing._id };
                })}
                isSearchable={true}
                classNamePrefix="react-select"
                styles={styles}
                onChange={evt => handleOnChangeIngredientName(evt, index)}
                required
              />
              <UnitWrp>
                <UnitQuantity
                  type="number"
                  min="0"
                  styles={styles}
                  onChange={e => {
                    handleOnChangeUnitQuantity(e, index);
                  }}
                  // name={`unitQuauntity${index}`}
                  placeholder="0"
                />
                <IngredientUnit
                  options={listUnits.map(unit => {
                    return { value: unit.value, label: unit.label };
                  })}
                  isSearchable={false}
                  styles={styles}
                  classNamePrefix="react-select"
                  onChange={e => {
                    handleOnChangeIngredientUnit(e, index);
                  }}
                  required
                />
              </UnitWrp>
            </FieldsInputWrp>
            <DeleteButton onClick={() => handleOnDeleteIngredient(index)}>
              <CloseIconButton />
            </DeleteButton>
          </IngredientsItem>
        ))}
      </StyledIngredientsList>
    </FormWrapper>
  );
};
