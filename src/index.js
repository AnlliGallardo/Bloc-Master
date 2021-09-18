import React from 'react';
import ReactDOM from 'react-dom';
// import About from './component/About';
// import EjemploCarousel from './component/EjemploCarousel';
// import Navbar  from './Navbar';
// import About from './component/About';
// import Cards from './component/Cards';
// import Login from './component/Login';
// import Tiket from './component/Tiket';
// import Search from './component/Search'
// import Perfil from './Perfil'
import AppRouters from './routers/AppRouters'


ReactDOM.render(
  <React.StrictMode>
    <AppRouters />
  </React.StrictMode>,
  document.getElementById('root')
);
