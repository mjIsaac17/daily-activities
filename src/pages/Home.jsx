import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CancelIcon from '@mui/icons-material/Cancel';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LoopIcon from '@mui/icons-material/Loop';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const Paper = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 95%;
  width: min(1500px, 95%);
`;

const RecentActivitiesContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  height: 40vh;
  overflow-y: scroll;
  padding: 0 15px 15px 15px;
  width: 100%;
  margin: 5px;
`;

const Title = styled.h3`
  background-color: white;
  padding: 15px 0 15px 0;
  font-size: 17px;
  margin-bottom: 10px;
  position: sticky;
  top: 0;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  align-items: center;
  border-top: 1px solid #cdcdcd;
  border-bottom: 1px solid #cdcdcd;
  display: flex;
  padding: 10px 5px;
  justify-content: space-between;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const ListItemIconTitle = styled.div`
  align-items: center;
  display: flex;
  font-size: ${(props) => props.fontSize};
  svg {
    margin-right: 10px;
    color: ${(props) => props.iconColor};
  }
`;

const ListItemTitle = styled.h4`
  align-items: center;
  display: flex;
  color: #595959;
  width: 50%;
  font-weight: 400;
`;

const ListItemStatus = styled.span`
  background-color: ${(props) => props.bgColor || '#A5ECDA'};
  border-radius: 10px;
  color: ${(props) => props.color || '#3FCAA8'};
  padding: 10px;
`;

const ListItemViewBtn = styled.button`
  background-color: transparent;
  align-items: center;
  border: none;
  color: #595959;
  cursor: pointer;
  display: flex;
  svg {
    font-size: 25px;
  }
  &:hover {
    color: #a6a6a6;
  }
`;

const ActivitiesSummaryContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  height: 40vh;
  overflow-y: scroll;
  padding: 0 15px 15px 15px;
  width: 100%;
  margin: 5px;
`;

const ListItemNumber = styled.span`
  font-weight: 900;
`;

export default function Home() {
  return (
    <Container>
      <Paper>
        <RecentActivitiesContainer>
          <Title>Recent activities</Title>
          <List>
            <ListItem>
              <ListItemTitle>Complete this site</ListItemTitle>
              <ListItemStatus color='#094c6d' bgColor='#a9efff'>
                In progress
              </ListItemStatus>
              <ListItemViewBtn>
                <ArrowForwardIosIcon />
              </ListItemViewBtn>
            </ListItem>

            <ListItem>
              <ListItemTitle>Start this site</ListItemTitle>
              <ListItemStatus color='#096d09' bgColor='#a9ffc1'>
                Completed
              </ListItemStatus>
              <ListItemViewBtn>
                <ArrowForwardIosIcon />
              </ListItemViewBtn>
            </ListItem>

            <ListItem>
              <ListItemTitle>Finish this site</ListItemTitle>
              <ListItemStatus color='#6d0909' bgColor='#ffa9a9'>
                Canceled
              </ListItemStatus>
              <ListItemViewBtn>
                <ArrowForwardIosIcon />
              </ListItemViewBtn>
            </ListItem>

            <ListItem>
              <ListItemTitle>Play videogames</ListItemTitle>
              <ListItemStatus color='#6d0909' bgColor='#ffa9a9'>
                Canceled
              </ListItemStatus>
              <ListItemViewBtn>
                <ArrowForwardIosIcon />
              </ListItemViewBtn>
            </ListItem>

            <ListItem>
              <ListItemTitle>Go to the gym</ListItemTitle>
              <ListItemStatus color='#736321' bgColor='#fffca9'>
                No status
              </ListItemStatus>
              <ListItemViewBtn>
                <ArrowForwardIosIcon />
              </ListItemViewBtn>
            </ListItem>

            <ListItem>
              <ListItemTitle>Have breakfast</ListItemTitle>
              <ListItemStatus color='#096d09' bgColor='#a9ffc1'>
                Completed
              </ListItemStatus>
              <ListItemViewBtn>
                <ArrowForwardIosIcon />
              </ListItemViewBtn>
            </ListItem>
          </List>
        </RecentActivitiesContainer>
      </Paper>

      <Paper>
        <ActivitiesSummaryContainer>
          <Title>Summary</Title>
          <List>
            <ListItem>
              <ListItemIconTitle iconColor='green' fontSize='18px'>
                <TaskAltIcon /> Completed
              </ListItemIconTitle>
              <ListItemNumber>3</ListItemNumber>
            </ListItem>
            <ListItem>
              <ListItemIconTitle iconColor='blue' fontSize='18px'>
                <LoopIcon /> In progress
              </ListItemIconTitle>
              <ListItemNumber>3</ListItemNumber>
            </ListItem>
            <ListItem>
              <ListItemIconTitle iconColor='red' fontSize='18px'>
                <CancelIcon /> Canceled
              </ListItemIconTitle>
              <ListItemNumber>3</ListItemNumber>
            </ListItem>
            <ListItem>
              <ListItemIconTitle iconColor='#ABB50E' fontSize='18px'>
                <HelpOutlineIcon /> No Status
              </ListItemIconTitle>
              <ListItemNumber>3</ListItemNumber>
            </ListItem>
          </List>
        </ActivitiesSummaryContainer>
      </Paper>
    </Container>
  );
}
