import * as Yup from 'yup';

export const RegisterSchema = Yup.object({
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
});

export const LoginSchema = Yup.object({
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
});
