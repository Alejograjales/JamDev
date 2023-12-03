import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import API from './Components/API';
import Navbar from './Components/Navbar/Navbar';
import Registro from './Components/Registro/Registro';

function App() {
  const http = API();
  
  useEffect(() => {
    async function getUsuario() {
      const csrf = await http.get('/sanctum/csrf-cookie')
      console.log('csrf =', csrf)
    } 

    getUsuario();
  }, [])
  

  return (
    <div className="App">
      <Routes>
          <Route path="/registro" element={<Registro http={http} />} > </Route>
          <Route path="/home" element={<Navbar />} > </Route>
          <Route path="/" element={<Navbar />} > </Route>
      </Routes>
    </div>
  );
}

export default App;

