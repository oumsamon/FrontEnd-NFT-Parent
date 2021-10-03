import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Diaper from './Components/Diapers/Diaper';
// import Bottle from './Components/Bottles/Bottle';
// import BottleNipple from './Components/BottleNipples/BottleNipple';
import AddDiaper from './Components/Diapers/AddDiaper';
import DiaperDetail from './Components/Diapers/DiaperDetail';
import UpdateDaiper from './Components/Diapers/UpdateDaiper';

function App() {
  return (
    <div>
      <div className="App-Navbar">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT2gninE2Mp0JA80jbmqCtAEv6U1lDozMJOg&usqp=CAU"
            alt="NFT Parent"
            height="100"
            width="150"
          />
          <h1>Parent</h1>
        </Link>

        <div className="App-Main">
          <Route exact path="/diaper" component={Diaper} />
          <Link to="/diaper">Diaper</Link>
          <Route exact path="/diaper/:id/" component={DiaperDetail} />
          <Route exact path="/diaper/diaper/:id/update" component={UpdateDaiper} />

          <Route exact path="/diaper/add" component={AddDiaper} />
        </div>
        {/* <div>
          <Route exact path="/bottle" component={Bottle} />
          <Link to="/bottle">Bottle</Link>
        </div>

        <div>
          <Route exact path="/bottlenipple" component={BottleNipple} />
          <Link to="/bottlenipple">Bottles Nipples</Link>
        </div> */}
      </div>
    </div>
  );
}

export default App;
