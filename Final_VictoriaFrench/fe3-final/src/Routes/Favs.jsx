import React from "react";
import Card from "../Components/Card";
import { useState, useEffect } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [favs, setFavs] = useState([]);
  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavs(storedFavs);
  }, []);

  return (
    <div className="container">
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map((fav) => (
          <Card key={fav.id} dentist={fav} />
        ))}
      </div>
      <div className="div_restore_button" >
        <button onClick={() => 
          {localStorage.removeItem('favs'); setFavs([]); window.location.reload()}} className="restore_button">
          Delete all favs 
        </button>
      </div>

    </div>
  );
};

export default Favs;
