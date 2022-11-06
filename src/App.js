import React from 'react';
import RemoveBtn from "./RemoveBtn";
import TableA from "./TableA";
import TableB from "./TableB";


function App() {
  return (
    <div style={{marginLeft : '5px'}}>
      <header>
        <h1>Take home assignment</h1>
      </header>

      <div className="grid-container">
          <TableA/>
          <TableB/>
      </div>

      <div style={{paddingTop : '5px'}}>
        <RemoveBtn/>
      </div>
    </div>
  );
}

export default App;
