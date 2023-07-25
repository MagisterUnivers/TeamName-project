import { setSubscription } from 'redux/Auth/authOperations';
import { Formik } from 'formik';
import { Report } from 'notiflix';
import { SubscribeSchema } from '../RegisterForm/ValidationSchema';
import { useTheme } from 'styled-components';
import {
  StyledButton,
  StyledFormInsight,
  StyledInputSubscribe,
  StyledText,
} from './SubscribeForm.styled';

export const SubscribeForm = () => {
  const theme = useTheme();
  const notiflixOptions = {
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
    success: {
      svgColor: theme.textColor,
      titleColor: theme.textColor,
      messageColor: theme.textColor,
      buttonColor: theme.bgrColor,
      buttonBackground: theme.textColor,
    },
  };
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={SubscribeSchema}
      onSubmit={async values => {
        try {
          const data = await setSubscription(values);
          Report.success(
            'Success',
            `You have successfully subscribed. <br/> We will send you newsletters at ${data.subscriptionEmail} `,

            'Ok',
            notiflixOptions
          );
        } catch (error) {
          Report.failure(
            'Error',
            `${
              error.response.status === 409
                ? `${error.response.data.message} <br/> Please, contact with our Support service`
                : error.message
            }`,
            'Ok',
            notiflixOptions
          );
        }
      }}
    >
      {({ errors, values, status }) => (
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
            type="submit"
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
                  notiflixOptions
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
