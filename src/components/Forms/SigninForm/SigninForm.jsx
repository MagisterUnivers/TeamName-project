import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { loginThunk } from 'redux/Auth/authOperations';
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';
import { selectIsClicked } from 'redux/selectors';
import { handleEyeClick } from 'redux/Auth/authSlice';
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
} from '../../RegisterForm/RegisterForm.styled';

const SigninForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isClicked = useSelector(selectIsClicked);

  const openPassword = () => {
    dispatch(handleEyeClick());
  };

  return (
    <StyledForm
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .matches(/\S+@\S+\.\S+/, 'This is an ERROR email')
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
      onSubmit={values => {
        dispatch(loginThunk(values)).then(res => {
          if (res.payload && res.payload.status === 200) {
            navigate('/signin');
          }
        });
      }}
    >
      {({ errors, touched }) => (
        <StyledFormInsight>
          <StyledTitle>Sign in</StyledTitle>
          <StyledInnerDiv>
            <StyledInputWrap>
              <StyledInput
                type="email"
                name="email"
                placeholder="Email"
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
          <StyledButton type="submit">Sign In</StyledButton>
          <AuthNavigate />
        </StyledFormInsight>
      )}
    </StyledForm>
  );
};

export default SigninForm;
