import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import AddDiaper from './AddDiaper';

function Diaper(props) {
  const urlDiaper = "https://nftparent-backend.herokuapp.com/diaper/";
  const [diaper, setDiaper] = useState([]);

  function getUrl() {
    fetch(urlDiaper)
      .then((res) => res.json())
      .then((res) => {
        console.log("Success fetch", res);
        setDiaper(res);
        console.log("this is diaper in useState", diaper);
      })
      .catch(console.error());
  }

  useEffect(() => {
    getUrl();
  }, []);

  return diaper.map((data) => (
    <div>
      <div className="App-Main">
        <Route exact path="/diaper/updatediaper" component={AddDiaper} />
        <Link to="/diaper/add">Add Diaper</Link>
      </div>

      <div className="diaperDisplay">
        <h2>{data.name}</h2>
        <h3>{data.type}</h3>
        <a href={`http://localhost:3000/diaper/${data.id}`}>
          <img src={data.photo_url} alt="diaper" />
        </a>
        <div>{/* <Link to={`/diaper/${data.id}`} >Diaper's Info</Link> */}</div>
      </div>
    </div>
  ));
}

export default Diaper;
