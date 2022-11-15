import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { getComentarios, getPizzasFiltradas, getUsuarios } from './service/pizzas';
import flecha from './img/flecha.png'
import estrella from './img/estrella.png'
import canasta from './img/canasta.png'
import Footer from './footer/Footer';
import { AppContext } from '../routes/Router';

const Detalles = () => {
  const navigate = useNavigate();
    const[params,setParams] = useSearchParams();
    const[pizza,setPizza] = useState([]);
    
    const[usuarios,setUsuarios] = useState([]);
   
    
    const[comentarios,setComentarios] = useState([]);
    const {pizzas, setPizzas} = useContext(AppContext)
    const {contador, setContador} = useContext(AppContext)

  useEffect(() => {
    let f =  params.get('name') ?? '';
  

     searchPizzasF(f)

    
 
   }, [])

const searchPizzasF = async(f)=>{
  console.log(f)
 let pizzaf = await getPizzasFiltradas(f)
let reseñas = await getComentarios(pizzaf[0].id)
let usuario = await getUsuarios(reseñas[0].idUser) 
console.log(reseñas)
 setPizza(pizzaf)
 setComentarios(reseñas)
 setUsuarios(usuario)
 setPizzas(pizzaf)

}
const back =()=>{
navigate('/home')
}
const cantidad =({target:{id}})=>{
console.log(id)

  

  if(id==='mas'){
    setContador(contador + 1)
  }else if(id==='menos'){
    if(contador===1){

    }else(setContador(contador-1))
  }


}
const pagar = ()=>{
  
}

  return (
    <>
    <aside>

 <article>
 {
  pizza.map((element,index)=>{
    let g = 0;

  console.log(comentarios)
  console.log(usuarios)
    return(
    <>

    <div className='d' >
    <div className='slider-title-detalles'>
      <div onClick={back} className='slider-title-detalles-aling'><img src={flecha} className='slider-flecha blanco' /> <p> Todas las Pizzas </p></div>

    
    </div>
    </div>
    <div className='slider-container-detalles' key={index}>
    <div className='backgraund-detalles'></div>
    <div className='backgraund1'></div>
    <div className='backgraund2'></div>
    <img src={element.img} /> 
 
    <img src={element.img2} /> 
    <img src={element.img3} /> 
   
    </div>
    <aside className='cont__detalles'>
<article className='cont__detalles__title'>
  <h2>{element.name}</h2>
  <div className='cont__detalles__detalles '><p className='rojo'>$ <b>{element.precio}</b> COP</p><p className='amarillo'> <img src={estrella} className='blanco'/> {comentarios.length} Reviews </p> </div>
</article>
<article className='cont__detalles__descripcion'>
  <b>Descripción</b>
  <p >
    {element.descripcion}
  </p>

  </article>
  </aside>
    </>
  )})
}
</article>

<aside className='f'>
{
    comentarios.map((element, index)=>{
      let puntaje = 0;
      if(element.puntuacion===1){
puntaje= '⭐'
      }if(element.puntuacion===2){
puntaje= '⭐⭐'
      }if(element.puntuacion===3){
puntaje= '⭐⭐⭐'
      }if(element.puntuacion===4){
puntaje= '⭐⭐⭐⭐'
      }if(element.puntuacion===5){
puntaje= '⭐⭐⭐⭐⭐'
      }
      console.log(element)
      return(
      <>
        <article className='comentario'>
        <div><img src={element.img} 
        className='comentario__img'/></div>
        <div>
        <div className='comentario__title'>
        <p > <b>{element.nameUser} </b></p>
        <p className='poquito'>{element.tiempo}</p>
        </div>
        <p>{puntaje}</p>
        <p className='comentario__comentario'> {element.comentario} </p>
        </div>
         </article>
      </>
    )})
   }
</aside>
 </aside>
<aside className='cont__pagar'>

  <div className='cont__pagar__simbolos' id='menos' onClick={cantidad}>
    -
  </div>
<span className='cont__pagar__simbolos'>{contador}</span>
<div className='cont__pagar__simbolos' onClick={cantidad} id='mas'>+</div>

<article>
  <div className='cont__pagar__canasta'>
  {
  <div className='cont__pagar__bolita'></div>
  }
<img src={canasta} className='iconos blanco mediano'/>
  </div>
</article>
<article>
  <Link to='/carrito' className='cont__pagar__pagar'>Pagar</Link>
</article>
</aside>
</>
  )

}

export default Detalles