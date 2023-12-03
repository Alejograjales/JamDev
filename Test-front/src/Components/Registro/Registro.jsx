import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registro.css';

import email_icon from '../Assets/email.png';
import id_icon from '../Assets/id.png';
import password_icon from '../Assets/password.png';
import user_icon from '../Assets/user.png';

const Registro = ({ http }) => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    name: '',
    surname: '',
    typecard: '',
    idcard: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isRegistro, setIsRegistro] = useState(true);

  useEffect(() => {
    const generateStars = () => {
      const numStars = 300;

      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('stars');
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        document.body.appendChild(star);
      }
    };

    generateStars();

    return () => {
      const stars = document.querySelectorAll('.stars');
      stars.forEach((star) => star.remove());
    };
  }, []);

  async function handleFormSubmit(e) {
    e.preventDefault();

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:"<>?[\];',.]).{8,}$/;
    if (!passwordPattern.test(usuario.password)) {
      setPasswordError(
        'La contraseña debe contener mínimo 8 caracteres alfanuméricos incluyendo mayúsculas y un caracter especial.'
      );
      return;
    }

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(usuario.email)) {
      setEmailError('El correo electrónico ingresado no es válido.');
      return;
    }

    try {
      const endpoint = isRegistro ? '/register' : '/login';
      const response = await http.post(endpoint, usuario);
      console.log('response =', response);

      // Redirigir al home luego de iniciar sesion
      if (!isRegistro) {
        navigate.push('/home');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  }

  function handleInputChange(e) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">{isRegistro ? 'Registrarse' : 'Iniciar Sesión'}</div>
        <div className="underline"></div>
      </div>

      <form onSubmit={handleFormSubmit}>
        {isRegistro && (
          <>
            <div className="input">
              <img src={id_icon} alt="" />
              <select name="typecard" value={usuario.typecard} onChange={handleInputChange}>
                <option value="" disabled hidden>
                  Seleccione el tipo de documento
                </option>
                <option value="cedula">CC</option>
                <option value="extranjero">CE</option>
                <option value="nit">NIT</option>
                <option value="pasaporte">PA</option>
              </select>
            </div>

            <div className="input">
              <img src={id_icon} alt="" />
              <input type="text" name="idcard" onChange={handleInputChange} placeholder="Número de tarjeta" />
            </div>

            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" name="name" onChange={handleInputChange} placeholder="Nombre" />
            </div>

            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" name="surname" onChange={handleInputChange} placeholder="Apellido" />
            </div>
          </>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" name="email" onChange={handleInputChange} placeholder="Correo electrónico" />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" name="password" onChange={handleInputChange} placeholder="Contraseña" />
        </div>

        {isRegistro && (
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              name="password_confirmation"
              onChange={handleInputChange}
              placeholder="Confirmar contraseña"
            />
          </div>
        )}

        {passwordError && usuario.password.length > 0 && <div className="error-message">{passwordError}</div>}
        {emailError && usuario.email.length > 0 && <div className="error-message">{emailError}</div>}

        <button type="submit" className="submit">
          {isRegistro ? 'Crear Usuario' : 'Iniciar Sesión'}
        </button>
      </form>

      <div className="toggle-action" onClick={() => setIsRegistro(!isRegistro)}>
        {isRegistro ? '¿Ya tienes una cuenta? Inicia Sesión' : '¿No tienes una cuenta? Regístrate'}
      </div>
    </div>
  );
};

export default Registro;




