import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 3px;
  color: ${(props) => props.color};
  cursor: pointer;
  font-size: 17px;
  letter-spacing: 1px;
  padding: 10px 25px;

  &:hover {
    background-color: ${(props) => props.backgroundColorHover};
  }
`;

export default function Button({
  text = 'Button',
  backgroundColor = '#fff',
  backgroundColorHover,
  color = 'black'
}) {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      color={color}
      backgroundColorHover={backgroundColorHover}
    >
      {text}
    </StyledButton>
  );
}
