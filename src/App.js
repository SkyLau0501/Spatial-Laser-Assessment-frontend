import React, {useState} from 'react';
import TableA from "./TableA";
import TableB from "./TableB";
import Button from '@mui/material/Button';


function App() {

  let [tableAList, setTableAList] = useState([]);
  let [tableBList, setTableBList] = useState([]);

  function createData(address, city, state) {
    return { address, city, state };
  }

  function removeDuplicate() {
    
    const rows = [
      createData('836 Cornfield Dr', 'Arlington', 'TX'),
      createData('819 Lovingham Dr', 'Arlington', 'TX'),
    ];

    setTableBList(rows);
  }

  return (
    <div style={{marginLeft : '5px'}}>
      <header>
        <h1>Take home assignment</h1>
      </header>

      <div className="grid-container">
          <TableA tableAList = {tableAList} setTableAList = {setTableAList}/>
          <TableB tableBList = {tableBList} setTableBList = {setTableBList} />
      </div>

      <div style={{paddingTop : '5px'}}>
      <div>
        <Button variant="contained" onClick={() => {removeDuplicate();}}>Remove</Button>
      </div>
      </div>
    </div>
  );
}

export default App;
