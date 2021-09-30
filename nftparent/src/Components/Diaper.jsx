import React, { useState, useEffect } from 'react';
import UpdateDiaper from './UpdateDiaper';


function Diaper(props) {
    const urlDiaper = 'http://localhost:8000/diaper/?format=json'
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

    useEffect(() => {
        getUrl()
    },[])


            return (
                diaper.map((data) => (
                <div>
                    <UpdateDiaper />
                    
            <h2>{data.name}</h2>
            <h3>{data.type}</h3>
            <img src={data.photo_url} />
                </div>
    )));

}

export default Diaper;
