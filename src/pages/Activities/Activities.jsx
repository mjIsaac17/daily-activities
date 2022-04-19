import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Container } from '../../components/Containers';
import ActivitiesTable from '../../components/ListTables/ActivitiesTable';
import { getActivities } from '../../redux/apiRequests/activityRequests';

export default function Activities() {
  const dispatch = useDispatch();
  const { activityList } = useSelector((state) => state.activity);
  const { token } = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    console.log('getActivities');
    getActivities(dispatch, token);
  }, [dispatch, token]);

  return (
    <Container>
      <Paper height='auto'>
        <ActivitiesTable activities={activityList} />
      </Paper>
    </Container>
  );
}
