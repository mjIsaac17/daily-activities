import styled from 'styled-components';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CategoryIcon from '@mui/icons-material/Category';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Container = styled.div`
  color: #14007a;
  flex: 1;
  min-width: 200px;
  max-width: 250px;
  background-color: #8dcaff;
  position: sticky;
  height: calc(100vh - 60px);
  top: 60px;
`;

const Category = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  margin: 10px;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding: 8px 15px;
  &:hover {
    background-color: #64b3f8;
  }
  svg {
    font-size: 20px;
    margin-right: 5px;
  }
`;

export default function Sidebar() {
  return (
    <Container>
      <Category>Activities</Category>
      <List>
        <ListItem>
          <FormatListBulletedIcon /> All my activities
        </ListItem>
        <ListItem>
          <AssignmentIcon /> To-do
        </ListItem>
        <ListItem>
          <TaskAltIcon /> Completed
        </ListItem>
        <ListItem>
          <AddCircleIcon /> Add new
        </ListItem>
      </List>
      <Category>Categories</Category>
      <List>
        <ListItem>
          <CategoryIcon /> My categories
        </ListItem>
        <ListItem>
          <AddCircleIcon /> Add new
        </ListItem>
      </List>
    </Container>
  );
}
