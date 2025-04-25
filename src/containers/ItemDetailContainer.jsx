import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import ItemDetail from '../components/ItemDetail';
import { getProduct } from '../firebase/db';


export default function ItemDetailContainer (){
  const [detail, setDetail] = useState()
  const { id } =useParams ()

  useEffect(() => {
    
    getProduct(id)
    .then(product => setDetail(product))
  }, [id]);

  return (
    <ItemDetail detail={detail}/>
  )
};

