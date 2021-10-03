import axios from 'axios';
import React, { useEffect, useState, Suspense} from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from "react-router-dom";

function DiaperDetail(props) {
  const [diaperDetail, setDiaperDetail] = useState("");

  const { id } = useParams();
  const history = useHistory();

  const getDiaperDetail = async () => {
    const { data } = await axios.get(`https://nftparent-backend.herokuapp.com/diaperdetail/${id}`);
    console.log(data);
    setDiaperDetail(data);
  };

  useEffect(() => {
    getDiaperDetail();
  }, []);

  const deleteDiaper = async (id) => {
    await axios
      .delete(`https://nftparent-backend.herokuapp.com/diaperdetail/${id}`)
      .then(axios.get(`https://nftparent-backend.herokuapp.com/diaperd`))
      .then(history.push("/diaper"));
  };

  return (
    <div>
      <h1>Diaper's Details</h1>
      <div className="single-diaper-info">
        <p>{diaperDetail.name}</p>
        <p>{diaperDetail.type}</p>
        <img src={diaperDetail.photo_url} alt="diaper" />
        <div>
          <Link to={`/${diaperDetail.id}/update`}>Update Diaper's Info</Link>
          <Link onClick={() => deleteDiaper(diaperDetail.id)}>Delete Diaper's Info</Link>
        </div>
      </div>
    </div>
  );
}

export default DiaperDetail;