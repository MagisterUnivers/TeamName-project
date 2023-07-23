import { Container, RegisterForm } from 'components';
import { BaseDiv, SummaryWrapper } from '../WelcomePage/WelcomPage.styled';

const RegisterPage = () => {
  return (
    <BaseDiv>
      <Container>
        <SummaryWrapper>
          <RegisterForm />
        </SummaryWrapper>
      </Container>
    </BaseDiv>
  );
};

export default RegisterPage;
