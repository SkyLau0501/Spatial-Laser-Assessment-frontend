import React, { useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//Table B List Component
export default function TableB(props) {

    //only run at the first time page render
    useEffect(()=> {
        fetch('http://localhost:8080/api/getTableBData')
        .then((response) => {
          if (response.ok) {
            console.log("API: getTableBData successful");
            return response.json();
          }
        })
        .then(data => props.setTableBList(data))
        .catch((error) => {
          console.log(error);
        });
    },[])

  return (
    <div>
        <h3>TableB</h3>

        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Address</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>State</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.tableBList.map((row) => (
                        <TableRow
                        key={row.address}
                        >
                            <TableCell>{row.address}</TableCell>
                            <TableCell>{row.city}</TableCell>
                            <TableCell>{row.state}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    </div>
  )
}
