import { Button } from "@mui/material";
import TableComponent from "../../components/TableComponent/TableComponent"
import "./User.css"
import DeletePopup from "../../components/popups/DeletePopup";
import { useEffect, useState } from "react";
import { userlist } from "../../services/apis";
import { updateUser } from "../../services/apis";
import PerformancePopup from "../../components/popups/PerformancePopup";
import EditProfile from "../../components/popups/EditUserPopup";

const User = () => {

  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [showPerformance, setShowPerformance] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [isBlock, setIsBlock] = useState();
  const [blockedDone, setBlockedDone] = useState(false);

  const columns = [
    { field: 'id', headerName: 'RANK', flex: 1, sortable: false, disableColumnMenu: true, width: 200, flex: 0 },
    { field: 'name', headerName: 'USERNAME', flex: 1, sortable: false, disableColumnMenu: true, width: 200, flex: 0 },
    // { field: 'place', headerName: 'PLACE', flex: 1, sortable: false, disableColumnMenu: true },
    {
      field: 'points',
      headerName: 'POINTS',
      // flex: 1,
      sortable: false,
      disableColumnMenu: true,
      width: 200, flex: 0
    },
    {
      field: 'performance',
      headerName: 'PERFORMANCE',
      flex: 1,
      width: 200, flex: 0,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Button
            style={{ fontSize: "25px" }}
            className="performanceBtn"
            onClick={() => {
              handleAction(params.row);
              setShowPerformance(true);
              console.log(params.id);
              console.log(rows[params.id - 1]);
              setSelectedRowIndex(params.id);
            }}
          >
            Performance
          </Button>
        );
      }
    },
    {
      field: 'edit',
      headerName: 'EDIT',
      flex: 1,
      width: 200, flex: 0,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Button
            style={{ fontSize: "25px" }}
            className="editBtn"
            onClick={() => {
              handleAction(params.row);
              setShowEdit(true);
              setSelectedRowIndex(params.id);
            }}
          >
            Edit
          </Button>
        );
      }
    },
    {
      field: 'delete',
      headerName: 'BLOCK',
      flex: 1,
      sortable: false,
      width: 200, flex: 0,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Button
            className="deleteBtn"
            style={{ backgroundColor: rows[params.id - 1].isBlocked ? "blue" : "red", fontSize: "25px" }}
            onClick={() => {
              handleAction(params.row); setShowDelete(true);
              setIsBlock(rows[params.id - 1].isBlocked);
              setSelectedRowIndex(params.id);
            }
            }
          >
            {rows[params.id - 1].isBlocked ? "Unblock" : "Block"}
          </Button >
        );
      }
    },
  ];

  // const rows = [
  //   { id: 1, name: 'Snow', place: 'Jon', points: 35 },
  //   { id: 2, name: 'Lannister', place: 'Cersei', points: 42 },
  //   { id: 3, name: 'Lannister', place: 'Jaime', points: 45 },
  //   { id: 4, name: 'Stark', place: 'Arya', points: 16 },
  //   { id: 5, name: 'Targaryen', place: 'Daenerys', points: 78 },
  //   { id: 6, name: 'Melisandre', place: "test", points: 150 },
  //   { id: 7, name: 'Clifford', place: 'Ferrara', points: 44 },
  //   { id: 8, name: 'Frances', place: 'Rossini', points: 36 },
  //   { id: 9, name: 'Roxie', place: 'Harvey', points: 65 },
  //   { id: 10, name: 'Snow', place: 'Jon', points: 35 },
  //   { id: 11, name: 'Lannister', place: 'Cersei', points: 42 },
  //   { id: 12, name: 'Lannister', place: 'Jaime', points: 45 },
  //   { id: 13, name: 'Stark', place: 'Arya', points: 16 },
  //   { id: 14, name: 'Targaryen', place: 'Daenerys', points: 65 },
  //   { id: 15, name: 'Melisandre', place: "test", points: 150 },
  //   { id: 16, name: 'Clifford', place: 'Ferrara', points: 44 },
  //   { id: 17, name: 'Frances', place: 'Rossini', points: 36 },
  //   { id: 18, name: 'Roxie', place: 'Harvey', points: 65 },
  //   { id: 19, name: 'Roxie', place: 'Harvey', points: 65 },
  //   { id: 20, name: 'Roxie', place: 'Harvey', points: 65 },
  // ];

  const handleAction = (row) => {
    // console.log("Action clicked for row:", row);
  };

  const [rows, setRows] = useState([]);

  const fetchData = async () => {
    try {
      const headers = {
        authorization: sessionStorage.getItem('token')
      }
      const response = await userlist(headers);

      if (response.data.sucess) {
        setRows(response.data.data.map((item, index) => ({
          ...item,
          id: index + 1 // Adds an incremental ID starting from 1
        })));
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [blockedDone])

  useEffect(() => {
    fetchData();
  }, [isEdit])

  return (
    <>
      {showEdit &&
        <EditProfile showEdit={showEdit} setShowEdit={setShowEdit} rows={rows} selectedRowIndex={selectedRowIndex - 1} setIsEdit={setIsEdit} />
      }

      {
        showDelete &&
        <DeletePopup isBlock={isBlock} showDelete={showDelete} setBlockedDone={setBlockedDone} setShowDelete={setShowDelete} rows={rows} selectedRowIndex={selectedRowIndex - 1} />
      }

      {showPerformance &&
        <PerformancePopup showPerformance={showPerformance} setShowPerformance={setShowPerformance} rows={rows} selectedRowIndex={selectedRowIndex - 1} />
      }

      <div className="user">
        <TableComponent
          columns={columns}
          rows={rows}
        />
      </div>
    </>
  )
}

export default User