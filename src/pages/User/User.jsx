import { Button } from "@mui/material";
import TableComponent from "../../components/TableComponent/TableComponent"
import "./User.css"

const User = () => {


  const columns = [
    { field: 'id', headerName: 'RANK', flex: 1, sortable: false, disableColumnMenu: true },
    { field: 'userName', headerName: 'USER NAME', flex: 1, sortable: false, disableColumnMenu: true },
    { field: 'place', headerName: 'PLACE', flex: 1, sortable: false, disableColumnMenu: true },
    {
      field: 'points',
      headerName: 'POINTS',
      flex: 1,
      sortable: false,
      disableColumnMenu: true
    },
    {
      field: 'action',
      headerName: 'ACTION',
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Button
            className="actionBtn"
            onClick={() => handleAction(params.row)}
          >
            View
          </Button>
        );
      }
    },
  ];


  const rows = [
    { id: 1, userName: 'Snow', place: 'Jon', points: 35 },
    { id: 2, userName: 'Lannister', place: 'Cersei', points: 42 },
    { id: 3, userName: 'Lannister', place: 'Jaime', points: 45 },
    { id: 4, userName: 'Stark', place: 'Arya', points: 16 },
    { id: 5, userName: 'Targaryen', place: 'Daenerys', points: 78 },
    { id: 6, userName: 'Melisandre', place: "test", points: 150 },
    { id: 7, userName: 'Clifford', place: 'Ferrara', points: 44 },
    { id: 8, userName: 'Frances', place: 'Rossini', points: 36 },
    { id: 9, userName: 'Roxie', place: 'Harvey', points: 65 },
    { id: 10, userName: 'Snow', place: 'Jon', points: 35 },
    { id: 11, userName: 'Lannister', place: 'Cersei', points: 42 },
    { id: 12, userName: 'Lannister', place: 'Jaime', points: 45 },
    { id: 13, userName: 'Stark', place: 'Arya', points: 16 },
    { id: 14, userName: 'Targaryen', place: 'Daenerys', points: 65 },
    { id: 15, userName: 'Melisandre', place: "test", points: 150 },
    { id: 16, userName: 'Clifford', place: 'Ferrara', points: 44 },
    { id: 17, userName: 'Frances', place: 'Rossini', points: 36 },
    { id: 18, userName: 'Roxie', place: 'Harvey', points: 65 },
    { id: 19, userName: 'Roxie', place: 'Harvey', points: 65 },
    { id: 20, userName: 'Roxie', place: 'Harvey', points: 65 },
  ];



  const handleAction = (row) => {
    console.log("Action clicked for row:", row);
  };

  return (
    <div className="user">
      <TableComponent
        columns={columns}
        rows={rows}
      />
    </div>
  )
}

export default User