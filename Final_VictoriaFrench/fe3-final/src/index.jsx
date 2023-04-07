import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../src/Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='home' element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='favs' element={<Favs/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


