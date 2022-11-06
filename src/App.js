import React, {useState} from 'react';
import TableA from "./TableA";
import TableB from "./TableB";
import LoadingButton from '@mui/lab/LoadingButton';


function App() {

  let [tableAList, setTableAList] = useState([]);
  let [tableBList, setTableBList] = useState([]);
  let [loading, setLoading] = useState(false);


  function removeDuplicate() {
    //Call removeDuplicate API to get new TableB list
    fetch('http://localhost:8080/api/removeDuplicate')
        .then((response) => {
          if (response.ok) {
            console.log("API: removeDuplicate successful");
            setLoading(false);
            return response.json();
          }
        })
        .then(data => setTableBList(data))
        .catch((error) => {
          console.log(error);
        });
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
        <LoadingButton variant="contained" loading={loading} onClick={() => {removeDuplicate(); setLoading(true)}}>Remove</LoadingButton>
      </div>
      </div>
    </div>
  );
}

export default App;
