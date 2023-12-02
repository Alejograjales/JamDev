import Home from 'Components/Home/Home';
import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
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
      <Router>
        <Switch>
          <Route path="/registro" Component={Registro} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Home} /> 
      <Registro http={http} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

