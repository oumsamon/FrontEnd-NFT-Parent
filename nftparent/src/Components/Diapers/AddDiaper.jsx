import React from 'react';
import axios from 'axios';

function AddDiaper(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log("Data in console", data);
    console.log(data.get("photo_url")); // reference by form input's `name` tag

    axios
      .post("https://nftparent-backend.herokuapp.com/diaper/", {
        name: data.get("name"),
        type: data.get("type"),
        photo_url: data.get("photo_url"),
      })
      .then(axios.get("https://nftparent-backend.herokuapp.com/diaper/"));
  }

  return (
    <div>
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
  );
}
  

  export default AddDiaper;

