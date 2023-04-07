import React from "react";
import { Link } from 'react-router-dom';
import{ useState } from "react";



const Card = ({ dentist }) => {

  const [message, setMessage] = useState ('');
  const [error, setError] = useState ('');

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const favs = {
      id: dentist.id,
      name: dentist.name,
      username: dentist.username
    };
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    const ifExists = storedFavs.some((fav)=>fav.id === dentist.id);

    if (!ifExists){
      storedFavs.push(favs);
      localStorage.setItem('favs', JSON.stringify(storedFavs));
      setMessage('Added to favs');
      setTimeout(() => {
        setMessage('');
      }, 2000); 
    }

    if(ifExists){
      setError('Already exists in favs');
      setTimeout(() => {
        setError('');
      }, 2000); 
    }
  }


  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}  
        <img alt="doctor" src="/images/doctor.jpg" className="img"></img>        
        <h2 className="title">{dentist.name}</h2>
        <p>{dentist.username}</p>
        <p>{dentist.id}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/detail/${dentist.id}`} state={{dentist}} className="detailLink">
        View more details
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton"><img alt="fav" src="/images/estrella.png"/></button>
        {message && <p className="addToFav">{message}</p>}
        {error && <p className="alreadyInFavs">{error}</p>}
    </div>
  );
};

export default Card;

