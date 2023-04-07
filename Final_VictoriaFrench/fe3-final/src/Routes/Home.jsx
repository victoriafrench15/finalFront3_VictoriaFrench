import React from 'react';
import Card from '../Components/Card';
import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentists, setDentists] = useState([]);
  
  useEffect(()=>{
    async function fetchData(){
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setDentists(data);
    }
    fetchData();
  },[])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {dentists.map((dentist)=>(
          <Card key={dentist.id} dentist={dentist}/>
        ))} 
      </div>
    </main>
  )
}

export default Home;