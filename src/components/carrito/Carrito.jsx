import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import flecha from '../Home/img/flecha.png'
import { AppContext } from '../routes/Router';
const Carrito = () => {
  const {pizzas, setPizzas} = useContext(AppContext)
 const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {contador, setContador} = useContext(AppContext)
  const onSubmit = async(data) => {
    console.log(data) 
    navigate('/pedido')
    setContador(1)
  }
  const back =()=>{
    navigate('/home')
    }
    console.log(pizzas)
  return (<>
    <aside className='cont__page__carrito'>
      <article className='volver' onClick={back}>
        <img src={flecha} className='slider-flecha '/> <p>Carrito de compras</p>
      </article>
      <article className='cont__page__carrito__pizza'>
        <img src={pizzas[0].img}/>
        <div>
          <p className='nombre__pizza'>{pizzas[0].name}</p>
          <div className='cont__page__carrito__pizza__compra'>
            <p>
          x {contador}
            </p>
            <p>
           {contador * pizzas[0].precio} COL
            </p>
          </div>
        </div>
      </article>
      <article>
        <b className='sa'>informacion de pago</b>
        <form className='form__pago' onSubmit={handleSubmit(onSubmit)} >

      <label>
      Nombre completo
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          {...register('nombre', {
            required: true,
            pattern: /^[A-Za-z]+$/i
          })}
          className={errors.nombre ? 'input--error' : ''}
        />
        {errors.nombre && <p>Este campo es obligatorio</p>}
      </label>

      <label>
      Numero de tarjeta de crédito
        <input
          type="text"
          placeholder="1234 1234 1234 1234"
          {...register('credito', {
            required: true,
            minLength: 16,
            pattern: /^[0-9]+$/

            // validate: passwordRule
          })}
          className={errors.credito ? ' input--error' : ''}
        />
        {errors.credito && <p>Este campo es obligatorio</p>}
      </label>
    <div>
      <label>
      Fecha de vencimiento
        <input
          type="month"
          placeholder="MM/YY"
          {...register('vencimiento', {
            required: true
          })}
          className={errors.vencimiento ? ' input--error' : ''}
        />
        {errors.vencimiento && <p>Este campo es obligatorio</p>}
      </label>
      <label>
      CVV
        <input
          type="text"
          placeholder=""
          {...register('cvv', {
            required: true,
            minLength: 3,
            pattern: /^[0-9]+$/
          })}
          className={errors.cvv ? 'input--error' : ''}
        />
        {errors.cvv && <p>Este campo es obligatorio</p>}
      </label></div>
    
      <label>
      Direccion
      <input
      type="text"
      placeholder="Av.morelos # 123"
      {...register('direccion', {
        required: true
      })}
      className={errors.direccion ? 'input--error' : ''}
    />
    {errors.direccion && <p>Este campo es obligatorio</p>}
      </label>
      <button type='submit'>enviar</button>
      </form>

      </article>
    </aside>
    </>
  )
}

export default Carrito