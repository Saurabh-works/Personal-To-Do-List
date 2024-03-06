import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const columns = [
  { id: "id", label: "ID", minWidth: 100 },
  { id: "taskName", label: "Task Name", minWidth: 170 },
  { id: "DOC", label: "Date Of Completion", minWidth: 170 },
  { id: "taskinfo", label: "Details Of Task", minWidth: 170 },
];

function Task_Table({ data, selectUser, deleteUser }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0); 
  };

  return (
    
    <Paper elevation={20} sx={{ width: "90%", overflow: "hidden", margin: 'auto', marginTop: '50px' }}>
      <Typography variant="h4" align="center" marginTop={2}>Tasks Table</Typography>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="left"
                  style={{ minWidth: column.minWidth, fontSize:"17px", fontWeight:"bold"}}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell style={{fontSize:"17px", fontWeight:"bold"}}>Update Action</TableCell>
              <TableCell style={{fontSize:"17px", fontWeight:"bold"}}>Delete Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align="left">
                          {value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                      <Button onClick={() => selectUser(row)} variant="contained" color="primary">
                        Select
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button onClick={() => deleteUser(row.id)} variant="contained" color="error">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[3, 5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default Task_Table;
