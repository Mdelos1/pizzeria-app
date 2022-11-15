import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './login.scss'
import icon from '../../assets/pizza-icon.png'
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from 'axios';
import Swal from "sweetalert2";

const URL_API = 'https://pizzeria-back.onrender.com/usuarios';

const Register = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async(data) => {
    console.log(data)
    const url = `${URL_API}?email=${data.email}&contraseña=${data.contraseña}&nombre=${data.nombre}`;
    const user = await axios.get(url);
    const userCheck = user.data;

    if (userCheck != '') {
      Swal.fire (
        'Oops',
        'El usuario ya existe', 
        'error'
      )
    } else {
      await axios.post(url, data);
      Swal.fire (
        'Usuario creado con éxito', 
        '',
        'success'
      )
      navigate('/');
    }
  }

  return (
    <>
      <div className='container-fluid d-flex align-items-center justify-content-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column align-items-center px-5'>
          <img src={icon} alt='pizza icon' />
          <h1 className='mb-5'>PISassScript</h1>
          <h2>Regístrate</h2>
          <p className='align-items-center mb-4'>Disfruta de la mejor Pizza creada para las personas amantes del código</p>
          <label className='mb-4 input-group'>
          <span class="input-group-text text-light">
            <i class="bi bi-person"></i>
            
          </span>
          <input
            type="text"
            placeholder="Nombre"
            {...register('nombre', {
              required: true
            })}
            className={errors.nombre ? 'form-control input--error' : 'form-control'}
          />
          {errors.nombre && <p>Este campo es obligatorio</p>}
        </label>
            <label className='mb-4 input-group'>
              <span class="input-group-text text-light">
              <i class="bi bi-envelope"></i>                
              </span>
              <input
                type="email"
                placeholder="Correo"
                {...register('email', {
                  required: true
                })}
                className={errors.email ? 'form-control input--error' : 'form-control'}
              />
              {errors.email && <p>Este campo es obligatorio</p>}
            </label>

            <label className='mb-4 input-group '>
              <span class="input-group-text text-light">
                <i class="bi bi-lock"></i>
              </span>
              <input
                type="text"
                placeholder="Contraseña"
                {...register('contraseña', {
                  required: true
                })}
                className={errors.contraseña ? 'form-control input--error' : 'form-control'}
              />
              {errors.contraseña && <p>Este campo es obligatorio</p>}
            </label>
          <div className='d-grid col-12'>
            <button className='btn btn-light mb-3 py-3 fw-semibold' type='submit'>Registrarse</button>
          </div>
          <p className='mt-3 mb-0 cuenta'>¿Ya tienes cuenta?</p>
          <h6 onClick={() => navigate('/')}className='register'>Inicia sesión</h6>
        </form>
      </div>
    </>
  )
}

export default Register