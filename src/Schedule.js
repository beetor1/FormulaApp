import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Schedule () {

  useEffect(() => {
    fetchSchedule();
  } , [] );

  const [circuits, setCircuits] = useState([]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const fetchSchedule = async () => {

    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/current.json',
      headers: { }
    };

    axios(config)
      .then(function (response) {
      console.log(response.data);
      setCircuits(response.data.MRData.RaceTable.Races);
      })
    .catch(function (error) {
      console.log(error);
    });
  }

  return(
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Number</StyledTableCell>
            <StyledTableCell>Race Name</StyledTableCell>
            <StyledTableCell>Country</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
          </TableRow>
        </TableHead>
      <TableBody>
      {circuits.map(circuit => (
          <StyledTableRow key={circuit.round}>
              <StyledTableCell >{circuit.round}</StyledTableCell>
              <StyledTableCell >{circuit.raceName}</StyledTableCell>
              <StyledTableCell >{circuit.Circuit.Location.country}</StyledTableCell>
              <StyledTableCell >{circuit.date}</StyledTableCell>
          </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

  export default Schedule;