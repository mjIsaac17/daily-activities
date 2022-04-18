import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  padding: 10px 2px;
  &:focus {
    outline: none;
  }
`;

export default function InputText({
  name,
  placeholder = 'Enter text',
  onChange,
  type
}) {
  return (
    <Input
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={onChange}
    />
  );
}

InputText.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf([
    'text',
    'file',
    'number',
    'date',
    'file',
    'password',
    'email'
  ]).isRequired
};
