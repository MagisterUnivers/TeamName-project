import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { loginThunk } from 'redux/Auth/authOperations';
import { StyledButton, StyledFormInsight, StyledInputSubscribe, StyledText } from './SubscribeForm.styled';
import { Formik } from 'formik';
export const SubscribeForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .matches(/\S+@\S+\.\S+/, 'This is an ERROR email')
          .required('Required'),
      })}
      onSubmit={values => {
        dispatch(loginThunk(values)).then(res => {
          if (res.payload && res.payload.status === 200) {
            navigate('/signin');
          }
        });
      }}
    >
      {({ errors, touched, values,  }) => (
        <StyledFormInsight>
          <StyledText>
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </StyledText>
          <StyledInputSubscribe
            type="email"
            name="email"
            placeholder="Enter the email"
            className={
              touched.email && !errors.email
                ? 'valid-border'
                : errors.email && touched.email
                ? 'invalid-border'
                : ''
            }
          />
          
          <StyledButton  disabled={values.email ? false : true} >Subscribe</StyledButton>
        </StyledFormInsight>
      )}
    </Formik>
  );
};
