import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { loginThunk } from 'redux/Auth/authOperations';
import { StyledButton, StyledFormInsight, StyledInputSubscribe, StyledText } from './SubscribeForm.styled';
import { Formik } from 'formik';
import {  Report } from 'notiflix';
import { useTheme } from 'styled-components';
export const SubscribeForm = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();

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
        alert('form submitted');
      }}
      
    >
      {({ errors, touched, values, status }) => (
        <StyledFormInsight>
          <StyledText>
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </StyledText>
          <StyledInputSubscribe
            type="email"
            name="email"
            placeholder="Enter the email"
          />
          {JSON.stringify(status)}
          <StyledButton
            formNoValidate
            type='submit'
            disabled={values.email ? false : true}
            onClick={() => {
              if (errors.email) {
                Report.failure(
                  'Email validation failure',
                  `Please, check is your email valid. <br/>We do not accept: <ul>
  <li>Symbols: $ % & ' * + — / &bsol; =? ^ &grave; { | } ~ () <> ! , []</li>
  <li>Cyrillic letters</li>
  <li>Spaces</li>
  <li>Period (.) at the beginning or end of a record</li>
  <li>Two dots (..) in a row</li>
  <li>two small dashes (--) in a row.</li>
  <li>Two underscores (__) in a row</li>
  <li>Two dogs (@@) in a row</li>
</ul>`,
                  'Ok',
                  {
                    className: 'subscribe__validation',
                    svgSize: '66px',
                    plainText: false,
                    backgroundColor: theme.secondBgrColor,
                    messageMaxLength: 2000,
                    fontFamily: 'Manrope',
                    failure: {
                      svgColor: theme.textColor,
                      titleColor: theme.textColor,
                      messageColor: theme.textColor,
                      buttonColor: theme.bgrColor,
                      buttonBackground: theme.textColor,
                    },
                  }
                );
              }
            }}
          >
            Subscribe
          </StyledButton>
        </StyledFormInsight>
      )}
    </Formik>
  );
};
