import React, {useState} from 'react';
import TableA from "./TableA";
import TableB from "./TableB";
import LoadingButton from '@mui/lab/LoadingButton';
import strings from './res/strings'


function App() {

  let [tableAList, setTableAList] = useState([]);
  let [tableBList, setTableBList] = useState([]);
  let [loading, setLoading] = useState(false);

  let apiurl = strings.API_PERFIX_URL;

  function removeDuplicate() {
    //Call removeDuplicate API to get new TableB list
    fetch(apiurl + '/removeDuplicate')
        .then((response) => {
          if (response.ok) {
            console.log(strings.API_SUCCESSFUL + "removeDuplicate");
            setLoading(false);
            return response.json();
          }
        })
        .then(data => setTableBList(data))
        .catch((error) => {
          console.log(strings.API_FAIL + "removeDuplicate");
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
