import styled from 'styled-components';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Container = styled.div`
  display: flex;
`;

const Body = styled.div`
  flex: 5;
`;
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container>
        <Sidebar />
        <Body>{children}</Body>
      </Container>
    </>
  );
}
