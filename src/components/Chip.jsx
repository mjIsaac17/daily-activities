import styled from 'styled-components';

const StyledChip = styled.span`
  background-color: ${(props) => props.bgColor || 'white'};
  border-radius: 10px;
  color: ${(props) => props.color || 'black'};
  padding: 10px;
`;

export default function Chip({ text, color, bgColor }) {
  return (
    <StyledChip color={color} bgColor={bgColor}>
      {text}
    </StyledChip>
  );
}
