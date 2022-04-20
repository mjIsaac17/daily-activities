import styled from 'styled-components';

export const TitleContainer = styled.div`
  color: #626262;
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: center;
  top: 15px;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: ${(props) => props.fontSize || '20px'};
  font-weight: 900;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h6`
  font-size: 20px;
  font-weight: 500;
`;
