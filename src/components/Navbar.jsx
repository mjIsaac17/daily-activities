import styled from 'styled-components';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

const StyledNavbar = styled.div`
  align-items: center;
  background-color: #2182dd;
  color: white;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const LeftContainer = styled.div``;

const NavbarTitle = styled.h3`
  cursor: pointer;
  font-size: 22px;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  * {
    margin-left: 15px;
  }
`;

const NoficationsContainer = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`;

const Notification = styled.span`
  display: flex;
  background-color: red;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 600;
  height: 15px;
  justify-content: center;
  position: absolute;
  top: -5px;
  right: -5px;
  width: 15px;
`;

const NavLink = styled.a`
  cursor: pointer;
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <LeftContainer>
        <NavbarTitle>Daily activities app</NavbarTitle>
      </LeftContainer>
      <RightContainer>
        <NoficationsContainer>
          <Notification>5</Notification>
          <NotificationsIcon style={{ cursor: 'pointer' }} />
        </NoficationsContainer>
        <SettingsIcon style={{ cursor: 'pointer' }} />
        <NavLink>Logout</NavLink>
      </RightContainer>
    </StyledNavbar>
  );
}
