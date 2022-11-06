import React, { useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//Table A List Component
export default function TableA(props) {

    

    //only run at the first time page render
    useEffect(()=> {
        fetch('http://localhost:8080/api/getTableAData')
        .then((response) => {
          if (response.ok) {
            console.log("API: getTableAData successful");
            return response.json();
          }
        })
        .then(data => props.setTableAList(data))
        .catch((error) => {
          console.log(error);
        });
    },[])

  return (
    <div>
        <h3>TableA</h3>

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
                    {props.tableAList.map((row) => (
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
