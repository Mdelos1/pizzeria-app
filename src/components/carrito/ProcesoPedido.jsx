import React from 'react'
import 'animate.css';
import { useNavigate } from 'react-router-dom';
const ProcesoPedido = () => {
  const navigate = useNavigate()
  const aHome =() =>{
    navigate('/home')
  }
  return (
    <aside className='page__pedidoprogreso'>
      <article className='page__pedidoprogreso__cont'>
<div className='page__pedidoprogreso__cont__animation'>
<img className='animate_animated animate_fadeIn' src='https://freepngimg.com/save/18343-success-png-image/1200x1200'/>
</div>
      </article>
      <article className='page__pedidoprogreso__text'>
        <h1>Tu pedido esta en proceso</h1>
        <p>Seras notificado cuando, llegue el repartidor. </p>
      </article>
      <div className='butonAceptar' onClick={aHome}>Aceptar</div>
    </aside>
  )
}

export default ProcesoPedido