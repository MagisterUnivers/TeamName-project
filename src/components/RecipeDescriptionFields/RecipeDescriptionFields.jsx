import * as Yup from 'yup';
import { lists } from '../../constants/drinksLists';
import {
  StyledForm,
  StyledFormInsight,
  StyledError,
  StyledImgBtn,
  StyledFildWrapper,
  StyledImg,
  StyledImgLabel,
  StyledImageInput,
  StyledSelect,
  StyledLabelSelect,
  StyledWrapperSelect,
  StyledField,
} from './RecipeDescriptionFields.styled';
import { FiPlus } from 'react-icons/fi';

const RecipeDescriptionFields = ({
  dataField,
  handleOnImgSelect,
  handleOnTitleRecipe,
  handleOnAboutRecipe,
  handleOnCategory,
  handleOnGlass,
  categoryList,
  glassList,
}) => {
  const { imgURL, itemTitleRecipe, aboutRecipe, category, glass } = dataField;

  return (
    <>
      <StyledForm
        initialValues={{
          itemTitle: '',
          aboutRecipe: '',
          category: '',
          glass: '',
        }}
        validationSchema={Yup.object({
          itemTitle: Yup.string().required('Required'),
          aboutRecipe: Yup.string().required('Required'),
          category: Yup.mixed().oneOf(lists.categoryList),
          glass: Yup.mixed().oneOf(lists.glassList),
        })}
      >
        {({ errors, touched }) => (
          <StyledFormInsight>
            <StyledImgLabel htmlFor="image">
              {imgURL ? (
                <StyledImg src={imgURL} />
              ) : (
                <StyledImgBtn>
                  <FiPlus color="#161F37" size="28" />
                </StyledImgBtn>
              )}
              <StyledImageInput
                as="input"
                id="image"
                name="image"
                type="file"
                onChange={handleOnImgSelect}
              ></StyledImageInput>
            </StyledImgLabel>

            <StyledFildWrapper>
              <div>
                <StyledField
                  as="input"
                  name="itemTitleRecipe"
                  value={itemTitleRecipe}
                  placeholder="Enter item title"
                  onChange={e => {
                    handleOnTitleRecipe(e.currentTarget.value);
                  }}
                  required
                />
                <StyledError name="itemTitleRecipe" component="div" />
              </div>
              <div>
                <StyledField
                  as="input"
                  name="aboutRecipe"
                  value={aboutRecipe}
                  placeholder="Enter about recipe"
                  onChange={e => {
                    handleOnAboutRecipe(e.currentTarget.value);
                  }}
                  required
                />
                <StyledError name="aboutRecipe" component="div" />
              </div>

              <StyledWrapperSelect>
                <StyledLabelSelect>Category</StyledLabelSelect>
                <StyledSelect
                  options={categoryList.map(category => {
                    return { value: category._id, label: category.category };
                  })}
                  isSearchable={true}
                  value={category}
                  classNamePrefix="react-select"
                  onChange={handleOnCategory}
                  placeholder="Cocktail"
                  required
                />
              </StyledWrapperSelect>
              <StyledWrapperSelect>
                <StyledLabelSelect>Glass</StyledLabelSelect>
                <StyledSelect
                  options={glassList.map(glass => {
                    return { value: glass._id, label: glass.title };
                  })}
                  isSearchable={true}
                  value={glass}
                  classNamePrefix="react-select"
                  onChange={handleOnGlass}
                  placeholder="Highball glass"
                  required
                />
              </StyledWrapperSelect>
            </StyledFildWrapper>
          </StyledFormInsight>
        )}
      </StyledForm>
    </>
  );
};

export default RecipeDescriptionFields;

/*<div>
                <StyledInputWrapper>
                  <StyledInput type="text" name="category" />
                  <StyledLabel>Category</StyledLabel>
                  <Select array={category} name="category" />
                </StyledInputWrapper>
                <StyledError name="category" component="div" />
              </div>
              <div>
                <StyledInputWrapper>
                  <StyledInput type="text" name="glass" />
                  <StyledLabel>Glass</StyledLabel>
                  <Select array={glass} name="glass" />
                </StyledInputWrapper>
                <StyledError name="glass" component="div" />
              </div>*/
