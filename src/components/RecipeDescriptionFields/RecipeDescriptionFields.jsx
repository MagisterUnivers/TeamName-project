// import * as Yup from 'yup';
import {
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

export const RecipeDescriptionFields = ({
  dataField,
  handleOnImgSelect,
  handleOnTitleRecipe,
  handleOnAboutRecipe,
  handleOnCategory,
  handleOnGlass,
  categoryList,
  glassList,
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
  const { imgURL, itemTitleRecipe, aboutRecipe, category, glass } = dataField;

  return (
    <>
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
              styles={styles}
              isSearchable={false}
              value={category}
              classNamePrefix="react-select"
              onChange={handleOnCategory}
              placeholder="Cocktail"
              
            />
          </StyledWrapperSelect>
          <StyledWrapperSelect>
            <StyledLabelSelect>Glass</StyledLabelSelect>
            <StyledSelect
              options={glassList.map(glass => {
                return { value: glass._id, label: glass.title };
              })}
              styles={styles}
              isSearchable={false}
              value={glass}
              classNamePrefix="react-select"
              onChange={handleOnGlass}
              placeholder="Highball glass"
            />
          </StyledWrapperSelect>
        </StyledFildWrapper>
      </StyledFormInsight>
    </>
  );
};


// validationSchema={Yup.object({
//   itemTitleRecipe: Yup.string().required('Required'),
//   aboutRecipe: Yup.string().required('Required'),
//   category: Yup.mixed().oneOf(lists.categoryList),
//   glass: Yup.mixed().oneOf(lists.glassList),
// })}
