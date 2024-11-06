import "./TableComponent.css"
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';




// eslint-disable-next-line react/prop-types
const TableComponent = ({ rows, columns }) => {
    const paginationModel = { page: 0, pageSize: 12 };

    return (
        <div className="">
            <Paper className="tableTest" sx={{ height: 735, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[12, 20, 50, 100]}
                    // checkboxSelection
                    sx={{
                        backgroundColor: 'transparent !important', // Makes the table's background transparent
                        '.MuiDataGrid-cell': {
                            backgroundColor: 'transparent !important', // Ensures each cell is transparent as well
                        },
                    }}
                    disableColumnSort={true}
                />
            </Paper>
        </div>
    )
}

export default TableComponent