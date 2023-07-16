import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { registrationThunk } from 'redux/Auth/authOperations';
import * as Yup from 'yup';
import { useSearchParams } from 'react-router-dom';
import { verifyThunk } from 'redux/Auth/authOperations';
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';
import { handleEyeClick } from 'redux/Auth/authSlice';
import { selectIsClicked } from 'redux/selectors';
import {
  StyledButton,
  StyledError,
  StyledForm,
  StyledFormInsight,
  StyledIconChecked,
  StyledIconError,
  StyledInput,
  StyledInputWrap,
  StyledTitle,
  StyledInnerDiv,
  StyledMessage,
  StyledAiOutlineEye,
  StyledAiOutlineEyeInvisible,
  StyledPasswordDiv,
} from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const isClicked = useSelector(selectIsClicked);

  const [searchParams] = useSearchParams();
  const verificationToken = searchParams.get('verificationToken');

  useEffect(() => {
    if (verificationToken === null) return;
    dispatch(verifyThunk(verificationToken));
  }, [verificationToken, dispatch]);

  const openPassword = () => {
    dispatch(handleEyeClick());
  };

  

  return (
    <StyledForm
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .matches(
            /^[a-zA-Zа-яєїієґҐА-ЯЄЇІЄҐҐ'0-9]+$/,
            'Name can only contain letters or numbers.'
          )
          .required('Required'),
        email: Yup.string()
          .matches(/^[a-zA-Z0-9.~+_-]+@[^\s@]+\.[^\s@]+$/, 'This is an ERROR email')
          .required('Required'),
        password: Yup.string()
          .required('No password provided.')
          .min(6, 'Password is too short - should be 6 chars minimum.')
          .max(16, 'Password is too long - should be 16 chars maximum.')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
            'Password must contain 1 lowercase, 1 uppercase letter and 1 number.'
          ),
      })}
      // validateOnChange={true}
      onSubmit={values => {
        dispatch(registrationThunk(values));
      }}
      
    >
      {({ errors, touched, handleChange, setFieldTouched}) => (
        <StyledFormInsight>
          <StyledTitle>Registration</StyledTitle>
          <StyledInnerDiv>
            <StyledInputWrap>
              <StyledInput
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) => {
                  setFieldTouched('name')
                  handleChange(e)
                }}
                className={
                  touched.name && !errors.name
                    ? 'valid-border'
                    : errors.name && touched.name
                    ? 'invalid-border'
                    : ''
                }
              />
              {errors.name && touched.name && (
                <div>
                  <StyledIconError color="red" />{' '}
                  <StyledError name="name" component="div" />
                </div>
              )}
              {touched.name && !errors.name && (
                <div>
                  <StyledIconChecked color="green" />{' '}
                  <StyledMessage>This is an CORRECT name</StyledMessage>
                </div>
              )}
            </StyledInputWrap>

            <StyledInputWrap>
              <StyledInput
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  setFieldTouched('email')
                  handleChange(e)
                }}
                className={
                  touched.email && !errors.email
                    ? 'valid-border'
                    : errors.email && touched.email
                    ? 'invalid-border'
                    : ''
                }
              />
              {errors.email && touched.email && (
                <div>
                  <StyledIconError color="red" />{' '}
                  <StyledError name="email" component="div" />
                </div>
              )}
              {touched.email && !errors.email && (
                <div>
                  <StyledIconChecked color="green" />{' '}
                  <StyledMessage>This is an CORRECT email</StyledMessage>
                </div>
              )}
            </StyledInputWrap>
            <StyledInputWrap>
              <StyledPasswordDiv>
                <StyledInput
                  id="password"
                  type="password"
                  name="password"
                  onChange={(e) => {
                    setFieldTouched('password')
                    handleChange(e)
                  }}
                  placeholder="Password"
                  className={
                    touched.password && !errors.password
                      ? 'valid-border'
                      : errors.password && touched.password
                      ? 'invalid-border'
                      : ''
                  }
                />
                {touched.password && !isClicked ? (
                  <StyledAiOutlineEyeInvisible
                    color="#F3F3F3"
                    onClick={openPassword}
                  />
                ) : touched.password && isClicked ? (
                  <StyledAiOutlineEye color="#F3F3F3" onClick={openPassword} />
                ) : (
                  ''
                )}
              </StyledPasswordDiv>
              {errors.password && touched.password && (
                <StyledError name="password" component="div" />
              )}
              {touched.password && !errors.password && (
                <StyledMessage>This is an CORRECT password</StyledMessage>
              )}
            </StyledInputWrap>
          </StyledInnerDiv>
          <StyledButton type="submit">Sign Up</StyledButton>
          <AuthNavigate />
        </StyledFormInsight>
      )}
    </StyledForm>
  );
};

export default RegisterForm;
