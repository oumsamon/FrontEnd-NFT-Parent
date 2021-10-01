import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import UpdateDiaper from './UpdateDiaper';

function Diaper(props) {
    const urlDiaper = 'https://nftparent-backend.herokuapp.com/diaper/'
    const [diaper, setDiaper ] = useState([])


        function getUrl() {
            fetch(urlDiaper)
            .then(res => res.json())
            .then(res => {
                console.log('Success fetch', res)
                setDiaper(res)
                console.log('this is diaper in useState', diaper)
                
            })
            .catch(console.error())
        }

        
          function handleSubmit(event) {
            event.preventDefault();
            const data = new FormData(event.target);
        console.log('Data in console', data)
            console.log(data.get("photo_url")); // reference by form input's `name` tag
      //   const obj = {
      //       name: data.get("name"),
      //       type: data.get("type"),
      //       photo_url: data.get("photo_url")
      
      //   }
            axios.post("https://nftparent-backend.herokuapp.com/diaper/", {
              name: data.get("name"),
              type: data.get("type"),
              photo_url: data.get("photo_url"),
          
              // method: 'POST',
              // body:JSON.stringify(obj),
              // headers:{ 'Authorization': 'Basic ' + Buffer.from("oumsamon" + ":" + "Quake319").toString('base64')}
            })
            .then(axios.get("https://nftparent-backend.herokuapp.com/diaper/"));
          }

    useEffect(() => {
        getUrl()
    },[])


            return diaper.map((data) => (
              <div>
                <div className="App-Main">
                  <Route exact path="/diaper/updatediaper" component={UpdateDiaper} />
                  <Link to="/diaper/updatediaper">Add Diaper</Link>
                </div>
                <div className="addDiaper">
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="diapername">Enter Name</label>
                    <input id="diapername" name="name" type="text" />

                    <label htmlFor="diapertype">Enter Diaper Type</label>
                    <input id="diapertype" name="type" type="text" />

                    <label htmlFor="photo_url">Photo url address</label>
                    <input id="photo_url" name="photo_url" type="text" />

                    <button>Send data!</button>
                  </form>
                </div>
                <div className="diaperDisplay">
                  <h2>{data.name}</h2>
                  <h3>{data.type}</h3>
                  <img src={data.photo_url} alt="diaper" />
                </div>
              </div>
            ));

}

export default Diaper;
