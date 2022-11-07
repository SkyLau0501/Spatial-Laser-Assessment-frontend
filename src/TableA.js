import React, { useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import strings from './res/strings'

//Table A List Component
export default function TableA(props) {

  let apiurl = strings.API_PERFIX_URL;

  //only run at the first time page render
  useEffect(()=> {
      fetch(apiurl + '/getTableAData')
      .then((response) => {
        if (response.ok) {
          console.log(strings.API_SUCCESSFUL + "getTableAData");
          return response.json();
        }
      })
      .then(data => props.setTableAList(data))
      .catch((error) => {
        console.log(strings.API_FAIL + "getTableAData");
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
