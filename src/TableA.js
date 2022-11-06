import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


/*
function createData(address, city, state) {
    return { address, city, state };
}

const rows = [
createData('836 Cornfield Dr', 'Arlington', 'TX'),
createData('819 Lovingham Dr', 'Arlington', 'TX'),
createData('5208 Rowcrop Dr', 'Arlington', 'TX'),
];
*/

//Table A List Component
export default function TableA() {

    let [tableAList, setTableAList] = useState([]);

    //only run at the first time page render
    useEffect(()=> {
        console.log("debug");
        fetch('http://localhost:8080/api/getTableAData')
        .then(response => response.json())
        .then(data => setTableAList(data))
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
                    {tableAList.map((row) => (
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
