import React, { useState, useEffect } from 'react';

function BottleNipple(props) {


    const urlBottleNipple = 'http://localhost:8000/bottlenipple/?format=json'
    const [bottleNipple, setBottleNipple ] = useState([])


    //     function getUrl() {
    //         fetch(urlBottleNipple)
    //         .then(res => res.json())
    //         .then(res => {
    //             console.log('Success fetch', res)
    //             setBottleNipple(res)
    //             console.log('this is bottleNipple in useState', bottleNipple)
                
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

export default BottleNipple;