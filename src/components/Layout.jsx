import styled from 'styled-components';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Container = styled.div`
  display: flex;
  height: calc(100vh - 60px); //60px = Navbar height
`;

const Body = styled.div`
  flex: 5;
`;
export default function Layout() {
  return (
    <>
      <Navbar />
      <Container>
        <Sidebar />
        <Body>Home</Body>
      </Container>
    </>
  );
}