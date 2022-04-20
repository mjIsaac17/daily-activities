import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { Container, Paper } from '../../components/Containers';
import {
  ErrorMessage,
  Form,
  FormInput,
  Label
} from '../../components/FormComponents';
import InputText, { TextArea } from '../../components/InputText';
import { Title } from '../../components/Typography';
import { useForm } from '../../hooks/useForm';
import { saveActivity } from '../../redux/apiRequests/activityRequests';
import colorStyles from '../../styles/color';

const { primary, secondary } = colorStyles;

const defaultActivity = {
  title: '',
  description: ''
};
export default function AddUpdateActivity({
  action = 'Add',
  activity = defaultActivity
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.user.currentUser);
  const { error } = useSelector((state) => state.activity);

  const [titleError, setTitleError] = useState('');

  const { formValues, handleInputChange } = useForm({ ...activity });

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = formValues.title.trim();

    if (title === '') {
      setTitleError('Title cannot be empty');
      return;
    }

    saveActivity(
      { title, description: formValues.description },
      dispatch,
      token
    );

    if (error === '') navigate('/activities');
  };

  return (
    <Container>
      <Paper noScroll>
        <Title fontSize='22px'>{action} activity</Title>
        <Form onSubmit={handleSubmit}>
          <FormInput>
            <Label>Title</Label>
            <InputText
              name='title'
              onChange={handleInputChange}
              placeholder='Title'
              type='text'
              value={formValues.title}
            />
            <ErrorMessage>{titleError}</ErrorMessage>
          </FormInput>
          <FormInput>
            <Label>Description</Label>
            <TextArea
              name='description'
              onChange={handleInputChange}
              placeholder='Description'
              value={formValues.description}
            />
          </FormInput>
          <Button
            backgroundColor={primary.bgColor}
            backgroundColorHover={primary.bgColorHover}
            color={primary.color}
            text='Save activity'
            type='submit'
          />
          <Button
            backgroundColor={secondary.bgColor}
            backgroundColorHover={secondary.bgColorHover}
            color={secondary.color}
            text='Cancel'
            type='button'
          />
        </Form>
      </Paper>
    </Container>
  );
}
