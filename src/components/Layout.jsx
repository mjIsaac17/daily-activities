import styled from 'styled-components';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Toast from './Toast';

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
        <Toast />
        <Sidebar />
        <Body>{children}</Body>
      </Container>
    </>
  );
}
