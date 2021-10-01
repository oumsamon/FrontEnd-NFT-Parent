import React, { useState, useEffect } from 'react';

function Bottle(props) {

    // http://localhost:8000/bottle/?format=json
    const urlBottle = 'http://localhost:8000/bottle/?format=json'
    const [bottle, setBottle ] = useState([])


    //     function getUrl() {
    //         fetch(urlBottle)
    //         .then(res => res.json())
    //         .then(res => {
    //             console.log('Success fetch', res)
    //             setBottle(res)
    //             console.log('this is bottle in useState', bottle)
                
    //         })
    //         .catch(console.error())
    //     }

    // useEffect(() => {
    //     getUrl()
    // },[])

    return (
        <div>
            
        </div>
    );
}

export default Bottle;