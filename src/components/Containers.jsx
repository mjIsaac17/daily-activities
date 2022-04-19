import styled from 'styled-components';

export const Paper = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  height: ${(props) => props.height || '100%'};
  overflow-y: scroll;
  padding: 15px;
  width: ${(props) => props.width || '100%'};
`;

export const Container = styled.div`
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
  padding: 15px 0;
  width: min(1500px, 95%);
`;
