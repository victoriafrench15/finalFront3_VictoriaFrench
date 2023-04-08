import React from 'react';
import { useLocation } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const location = useLocation();
  const { dentist } = location.state;

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className='detail container'>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <h1 className="title">{dentist.name}</h1>
        <img alt="doctor" src="/images/doctor.jpg" className="img_detail"></img> 
        <div className='detail_contenedor'>
          <div> 
            <p>User Name: {dentist.username}</p>
            <p>ID: {dentist.id}</p>
            <p>Email: {dentist.email}</p>
            <h4>Adress</h4>
            <p>Street: {dentist.address.street}</p>
            <p>City: {dentist.address.city}</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Phone: {dentist.phone}</p>
            <p>Web Site: {dentist.website}</p>
            <h4>Company </h4>
            <p>Company name: {dentist.company.name}</p> 
            <p>Catch Phrase: {dentist.company.catchPhrase}</p>
          </div>  
        </div>
    </div>
  )
}

export default Detail