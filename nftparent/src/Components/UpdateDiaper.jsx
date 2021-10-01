import React, { Component } from 'react';
import axios from 'axios';


class MyForm extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
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
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="diapername">Enter Name</label>
          <input id="diapername" name="name" type="text" />
  
          <label htmlFor="diapertype">Enter Diaper Type</label>
          <input id="diapertype" name="type" type="text" />
  
          <label htmlFor="photo_url">Photo url address</label>
          <input id="photo_url" name="photo_url" type="text" />
  
          <button>Send data!</button>
        </form>
      );
    }
  }

  export default MyForm

