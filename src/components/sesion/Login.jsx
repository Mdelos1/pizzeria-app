import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './login.scss'
import icon from '../../assets/pizza-icon.png'
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from 'axios';
import Swal from "sweetalert2";
import { AppContext } from '../routes/Router';


const URL_API = 'https://pizzeria-back.onrender.com/usuarios';

const Login = () => {
  const navigate = useNavigate();

const{usuarios, setUsuarios} = useContext
(AppContext)
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (datas) => {
    console.log(datas)
    const url = `${URL_API}?email=${datas.email}&contraseña=${datas.contraseña}`;
    const {data} = await axios.get(url);
    const userCheck = data;

    if (userCheck != '') {
      setUsuarios(data)
      navigate('home');

    } else {
      Swal.fire(
        'Oops',
        'El usuario o contraseña es incorrecto o no existe',
        'error'
      )
    }
  }

  return (
    <>
      <div className='container-fluid d-flex align-items-center justify-content-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column align-items-center px-5'>
          <img src={icon} alt='pizza icon' />
          <h1 className='mb-5'>PISassScript</h1>
          <h2>Inicia sesión en tu cuenta</h2>
          <p className='align-items-center mb-4'>Disfruta de la mejor Pizza creada para las personas amantes del código</p>

          <label className='col-12 col-sm-6 mb-4 input-group'>
            <span class="input-group-text text-light">
              <i class="bi bi-person"></i>
            </span>
            <input
              type="email"
              class="form-control"
              placeholder="Usuario"
              {...register('email', {
                required: true
              })}
              className={errors.email ? 'form-control input--error' : 'form-control'}
            />
            {errors.email && <p>Este campo es obligatorio</p>}
          </label>

          <label className='col-12 col-sm-6 mb-4 input-group'>
            <span class="input-group-text text-light">
              <i class="bi bi-lock"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Contraseña"
              {...register('contraseña', {
                required: true
              })}
              className={errors.contraseña ? 'form-control input--error' : 'form-control'}
            />
            {errors.contraseña && <p>Este campo es obligatorio</p>}
          </label>
          <div className='d-grid col-12 col-sm-6'>
            <button className='btn btn-light mb-3 py-3 fw-semibold' type='submit'>Iniciar sesión</button>
          </div>

          <h6 className='mb-5'>Restablecer contraseña</h6>
          <p className='mb-0 cuenta'>¿No tienes una cuenta?</p>
          <h6 onClick={() => navigate('register')} className='register'>Regístrate aquí</h6>
        </form>
      </div>
    </>
  )
}

export default Login