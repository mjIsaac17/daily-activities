import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Chip from '../Chip';
import colorStyles from '../../styles/color';

const columns = [
  { field: 'title', headerName: 'Title', flex: 2 },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    renderCell: (params) => {
      let styles = { ...colorStyles.completed };

      switch (params.row.status) {
        case 'In progress':
          styles = { ...colorStyles.inProgress };
          break;

        case 'Canceled':
          styles = { ...colorStyles.canceled };
          break;

        case 'No status':
          styles = { ...colorStyles.noStatus };
          break;

        default:
          break;
      }
      console.log(styles.completed);
      return (
        <Chip
          text={params.row.status}
          color={styles.color}
          bgColor={styles.bgColor}
        />
      );
    }
  },
  {
    field: 'actions',
    type: 'actions',
    flex: 1,
    getActions: () => [
      <GridActionsCellItem icon={<ArrowForwardIosIcon />} label='Details' />
    ]
  }
];

export default function ActivitiesTable({ activities }) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={activities}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
