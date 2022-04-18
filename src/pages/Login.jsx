import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import InputText from '../components/InputText';
import { useForm } from '../hooks/useForm';
import { login } from '../redux/apiRequests/userRequests';

const LoginPage = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(3, 76, 143, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const LoginContainer = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 5px rgba(74, 74, 74, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: min(400px, 90%);
  position: relative;
  width: min(400px, 90%);
`;

const TitleContainer = styled.div`
  color: #626262;
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: center;
  top: 15px;
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 900;
`;

const Subtitle = styled.h6`
  font-size: 20px;
  font-weight: 500;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const FormInput = styled.div`
  margin-bottom: 20px;
`;

const ErrorMessage = styled.span`
  color: red;
  margin-top: 2px;
  font-size: 12px;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 5px;
`;

const Register = styled.a`
  color: #626262;
  bottom: 15px;
  font-size: 14px;
  cursor: pointer;
  position: absolute;
`;

const initialState = {
  email: '',
  password: ''
};

export default function Login() {
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state) => state.user);
  const { formValues, handleInputChange } = useForm(initialState);
  const [formError, setFormError] = useState(initialState);

  const isFormValid = ({ email, password }) => {
    let errorFlag = false;
    const errors = { ...initialState };

    if (email === '') {
      errors.email = 'Invalid email';
      errorFlag = true;
    }
    if (password === '') {
      errors.password = 'Invalid password';
      errorFlag = true;
    }
    setFormError({ ...errors });
    return !errorFlag;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: formValues.email.trim(),
      password: formValues.password
    };
    if (isFormValid(user)) {
      login(dispatch, user);
    }
  };

  return (
    <LoginPage className='container-center'>
      <LoginContainer>
        <TitleContainer>
          <Title>Daily activities app</Title>
          <Subtitle>Welcome back!</Subtitle>
        </TitleContainer>
        <LoginForm onSubmit={handleSubmit}>
          <FormInput className='flex-column'>
            <Label>Email</Label>
            <InputText
              placeholder='example@email.com'
              name='email'
              type='email'
              onChange={handleInputChange}
            />
            <ErrorMessage>{formError.email}</ErrorMessage>
          </FormInput>
          <FormInput className='flex-column'>
            <Label>Password</Label>
            <InputText
              placeholder='Password'
              type='password'
              name='password'
              onChange={handleInputChange}
            />
            <ErrorMessage>{formError.password}</ErrorMessage>
          </FormInput>
          <Button
            disabled={isLoading}
            backgroundColor='teal'
            backgroundColorHover='#1c6c6f'
            color='white'
            text='Login'
            type='submit'
          />
        </LoginForm>
        <ErrorMessage>{error}</ErrorMessage>
        <Register>
          <Link to='/register'>Create new account</Link>
        </Register>
      </LoginContainer>
    </LoginPage>
  );
}
