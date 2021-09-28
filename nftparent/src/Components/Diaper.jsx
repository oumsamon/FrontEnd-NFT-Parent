import React, { useState, useEffect } from 'react';


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
                <div>
            <h2>{diaper.name}</h2>
                </div>
    );

}

export default Diaper;
