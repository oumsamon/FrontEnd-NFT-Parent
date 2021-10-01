import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Diaper from './Components/Diapers/Diaper';
import Bottle from './Components/Bottles/Bottle';
import BottleNipple from './Components/BottleNipples/BottleNipple';
import UpdateDiaper from './Components/Diapers/UpdateDiaper';

function App() {
  return (
    <div>
      <div className="App-Navbar" >
        <Link to="/"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT2gninE2Mp0JA80jbmqCtAEv6U1lDozMJOg&usqp=CAU' alt="NFT Parent" /><h1>Parent</h1></Link>
        <div className="App-test">
                  <Route exact path="/diaper/updatediaper" component={UpdateDiaper} />
                  <Link to="/diaper/updatediaper">Add Diaper</Link>
                </div>
        <div className="App-Main">
          <Route exact path="/diaper" component={Diaper} />
          <Link to="/diaper">Diaper</Link>
        </div>
        <div>
          <Route exact path="/bottle" component={Bottle} />
          <Link to="/bottle">Bottle</Link>
        </div>

        <div>
          <Route exact path="/bottlenipple" component={BottleNipple} />
          <Link to="/bottlenipple">Bottles Nipples</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
