import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router';

function DiaperDetail(props) {
    const [diaperDetail, setDiaperDetail] = useState("")

    const { id } = useParams();

    const getDiaperDetail = async () => {
        const { data } = await axios.get(`https://nftparent-backend.herokuapp.com/diaperdetail/${id}`)
        console.log(data)
        setDiaperDetail(data)
    }

    useEffect(() => {
        getDiaperDetail();
    }, [])

    return (
        <div>
            <h1>Diaper's Details</h1>
            <div className="single-diaper-info">
                <p>{diaperDetail.name}</p>
                <p>{diaperDetail.type}</p>
                <img src={diaperDetail.photo_url} alt="diaper" />
 
            </div>
            
        </div>
    );
}

export default DiaperDetail;