import { RegisterForm } from 'components';
import { BaseDiv, SummaryWrapper } from '../WelcomePage/WelcomPage.styled';

const RegisterPage = () => {
  return (
    <BaseDiv>
      <SummaryWrapper>
        <RegisterForm />
      </SummaryWrapper>
    </BaseDiv>
  );
};

export default RegisterPage;
