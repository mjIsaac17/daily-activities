import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { register } from '../redux/apiRequests/userRequests';
import Button from '../components/Button';
import InputText from '../components/InputText';
import {
  ErrorMessage,
  Form,
  FormInput,
  Label,
  Row
} from '../components/FormComponents';
import { Subtitle, Title, TitleContainer } from '../components/Typography';

const RegisterPage = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(3, 76, 143, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const RegisterContainer = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 5px rgba(74, 74, 74, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: min(620px, 90%);
  position: relative;
  width: min(440px, 90%);
`;

const RedirectToLogin = styled.a`
  color: #626262;
  bottom: 15px;
  font-size: 14px;
  cursor: pointer;
  position: absolute;
`;

const initialState = {
  name: '',
  lastName: '',
  age: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export default function Register() {
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state) => state.user);
  const { formValues, handleInputChange } = useForm(initialState);
  const [formError, setFormError] = useState(initialState);

  const isFormValid = ({
    name,
    lastName,
    age,
    email,
    password,
    confirmPassword
  }) => {
    let errorFlag = false;
    const errors = { ...initialState };

    if (name === '') {
      errors.name = 'Invalid name';
      errorFlag = true;
    }

    if (lastName === '') {
      errors.lastName = 'Invalid lastname';
      errorFlag = true;
    }

    if (age === '' || age <= 0) {
      errors.age = 'Enter a valid age';
      errorFlag = true;
    }

    if (email === '') {
      errors.email = 'Invalid email';
      errorFlag = true;
    }

    if (password === '') {
      errors.password = 'Invalid password';
      errorFlag = true;
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords must match';
      errorFlag = true;
    }

    setFormError({ ...errors });
    return !errorFlag;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: formValues.name.trim(),
      lastName: formValues.lastName.trim(),
      age: formValues.age,
      email: formValues.email.trim(),
      password: formValues.password,
      confirmPassword: formValues.confirmPassword
    };
    if (isFormValid(user)) {
      register(dispatch, user);
    }
  };

  return (
    <RegisterPage className='container-center'>
      <RegisterContainer>
        <TitleContainer>
          <Title>Daily activities app</Title>
          <Subtitle>Create new account</Subtitle>
        </TitleContainer>
        <Form onSubmit={handleSubmit}>
          <Row>
            <FormInput>
              <Label>Name</Label>
              <InputText
                placeholder='Name'
                name='name'
                type='text'
                onChange={handleInputChange}
              />
              <ErrorMessage>{formError.name}</ErrorMessage>
            </FormInput>
            <FormInput>
              <Label>Lastname</Label>
              <InputText
                placeholder='Lastname'
                name='lastName'
                type='text'
                onChange={handleInputChange}
              />
              <ErrorMessage>{formError.lastName}</ErrorMessage>
            </FormInput>
          </Row>
          <FormInput>
            <Label>Email</Label>
            <InputText
              placeholder='example@email.com'
              name='email'
              type='email'
              onChange={handleInputChange}
            />
            <ErrorMessage>{formError.email}</ErrorMessage>
          </FormInput>
          <FormInput>
            <Label>Age</Label>
            <InputText
              placeholder='Age'
              name='age'
              type='number'
              onChange={handleInputChange}
            />
            <ErrorMessage>{formError.age}</ErrorMessage>
          </FormInput>
          <Row>
            <FormInput>
              <Label>Password</Label>
              <InputText
                placeholder='Password'
                type='password'
                name='password'
                onChange={handleInputChange}
              />
              <ErrorMessage>{formError.password}</ErrorMessage>
            </FormInput>
            <FormInput>
              <Label>Confirm password</Label>
              <InputText
                placeholder='Confirm password'
                type='password'
                name='confirmPassword'
                onChange={handleInputChange}
              />
              <ErrorMessage>{formError.confirmPassword}</ErrorMessage>
            </FormInput>
          </Row>
          <Button
            disabled={isLoading}
            backgroundColor='teal'
            backgroundColorHover='#1c6c6f'
            color='white'
            text='Register'
            type='submit'
          />
        </Form>
        <ErrorMessage>{error}</ErrorMessage>
        <RedirectToLogin>
          <Link to='/login'>Already have an account? Login</Link>
        </RedirectToLogin>
      </RegisterContainer>
    </RegisterPage>
  );
}
