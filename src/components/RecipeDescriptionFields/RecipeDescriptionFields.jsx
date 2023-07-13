import React, { useState } from 'react';
import * as Yup from 'yup';
import { lists } from '../../constants/drinksLists';
import Select from '../Select/Select';
import {
  StyledForm,
  StyledFormInsight,
  StyledLabel,
  StyledInput,
  StyledError,
  StyledContainerImg,
  StyledImgBtn,
  StyledInputFile,
  StyledFildWrapper,
  StyledInputWrapper,
} from './RecipeDescriptionFields.styled';
import { FiPlus } from 'react-icons/fi';

const RecipeDescriptionFields = ({ category, glass }) => {
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
            <StyledContainerImg>
              <StyledImgBtn>
                <FiPlus color="#161F37" size="28" />
              </StyledImgBtn>
              <StyledInputFile
                id="userImgUrl"
                type="file"
                // onChange={event => setUserImgUrl(event.target.files[0])}
                accept="image/*,.png,.jpg,.gif,.web"
                name="userImgUrl"
              ></StyledInputFile>
            </StyledContainerImg>
            <StyledFildWrapper>
              <div>
                <StyledInputWrapper>
                  <StyledInput type="text" name="itemTitle" />
                  <StyledLabel>Enter item title</StyledLabel>
                </StyledInputWrapper>
                <StyledError name="itemTitle" component="div" />
              </div>
              <div>
                <StyledInputWrapper>
                  <StyledInput type="text" name="aboutRecipe" />
                  <StyledLabel>Enter about recipe</StyledLabel>
                </StyledInputWrapper>
                <StyledError name="aboutRecipe" component="div" />
              </div>
              <div>
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
              </div>
            </StyledFildWrapper>
          </StyledFormInsight>
        )}
      </StyledForm>
    </>
  );
};

export default RecipeDescriptionFields;
