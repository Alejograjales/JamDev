import { useEffect } from 'react';
import './App.css';
import API from './Components/API';
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
      <h1>Register</h1>
      <Registro http={http} />
    </div>
  );
}

export default App;
