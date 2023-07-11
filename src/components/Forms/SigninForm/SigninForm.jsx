import React from 'react';
import { Formik, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';
import {
  Rel,
  StyledBtn,
  StyledDoneLogo,
  StyledErrorLogo,
  StyledField,
  StyledForm,
  StyledHolder,
  StyledLabel,
  StyledTaker,
  StyledTitle,
  StyledWrapper,
} from './SigninForm.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .max(15, 'Length must be less then 15')
    .required('Your name is required'),
  email: Yup.string()
    .email('Invalid e-mail')
    .required('Your e-mail is required'),
  birthday: Yup.date().nullable(),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, 'Enter your phone number in format +380')
    .nullable(),
  skype: Yup.string().max(16, 'Length must be less then 16').nullable(),
});

const SigninForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const InputField1 = ({ name, placeholder, type }) => {
    const [field, meta] = useField(name);
    const showError = meta.touched && meta.error;
    const className = showError ? 'error' : 'success';
    return (
      <>
        {/* <StyledLabel
          htmlFor={name}
          style={{
            color: showError ? 'red' : 'green' || 'black',
          }}
        >
          {name.slice(0, 1).toUpperCase() + name.slice(1)} */}
        {/* </StyledLabel> */}
        <Rel>
          <StyledField
            type={type ?? 'text'}
            id={name}
            name={name}
            placeholder={placeholder}
            className={className}
            {...field}
          />
          {showError && meta.touched && <StyledErrorLogo $show={'true'} />}
          {!showError && meta.touched && <StyledDoneLogo $showerror={''} />}
          {showError && meta.touched && (
            <ErrorMessage
              name={name}
              component="p"
              className="error-message"
              style={{
                fontSize: '12px',
                lineHeight: 'calc(14/12)',
                marginTop: '8px',
                color: 'red',
              }}
            />
          )}
          {!showError && meta.touched && (
            <p
              style={{
                fontSize: '12px',
                lineHeight: 'calc(14/12)',
                marginTop: '8px',
                color: 'green',
              }}
            >
              This is a CORRECT {name}
            </p>
          )}
        </Rel>
      </>
    );
  };

  const handleSubmit = values => {
    // dispatch(loginThunk(values)).then(() => navigate('/main/calendar'));
  };

  return (
    <div>
      <StyledWrapper>
        <StyledTitle>Sign in</StyledTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <StyledForm>
              <StyledTaker>
                <StyledHolder>
                  <InputField1 name="email" placeholder="nadiia@gmail.com" />
                </StyledHolder>
                <StyledHolder>
                  <InputField1
                    name="password"
                    type="password"
                    placeholder="qwerty12345"
                  />
                </StyledHolder>
              </StyledTaker>
              <StyledBtn type="submit">Log in</StyledBtn>
            </StyledForm>
          )}
        </Formik>
      </StyledWrapper>
      <AuthNavigate isLoginForm={true} />
    </div>
  );
};

export default SigninForm;
