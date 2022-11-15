import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../routes/Router'
import Footer from './footer/Footer';
import { getPizzas } from './service/pizzas'

const Home = () => {
  const navigate = useNavigate();
  const[pizzas, setPizzas] = useState([]);
  const{usuarios, setusuarios} = useContext(AppContext)
  console.log(usuarios.length === 0)
  let  cupones = [
    {name:'Cupones para Frontends',
descuento:'45% OFF'
  },
  {name:'Cupon Pizza CSS',
  descuento:'25% OFF'
    }
  ]
  

  useEffect(() => {
searchPizzas()
    
   }, [])
 const searchPizzas= async()=>{
let infopizzas =await getPizzas()
 setPizzas(infopizzas)
console.log(pizzas)
 } 
 const redireccion =({target})=>{
  console.log(target.id)
navigate(`/pizzas?name=${target.id}`)
}
  return (
    <>
    <aside className='body'>
      <article className='body__header'>
    <div className='body__title'> <b>Pizzas disponibles </b></div>
   <p className='body__subtitle'> <b>Ver todas </b> </p></article>
   <div className='prueba'>
   <article className='body__contcupon'>
  
   {
    cupones.map((element, index)=>(
      <>
      <div className='relativo'> 
      <div className='bacgrounfcupon'></div>
      <div className='body__cupon' key={index}>
      <p>{element.name}</p>
      <p className='body__cupon__descuento'>{element.descuento}</p>
    </div>
    </div>
</>
    ))

   }
   </article>
   </div>

   <article>
    <section className='center'>
{
  pizzas.map((element,index)=>(
    <>
    <div className='d'>
    <div className='slider-title' onClick={redireccion} id={element.name}>
      <p>{element.name}</p>
      <p className='rojo'>${element.precio} COP</p>
    
    </div>
    </div>
    <div className='slider-container' key={index}>
    <div className='backgraund' onClick={redireccion} id={element.name}></div>
    <div className='backgraund1'></div>
    <div className='backgraund2'></div>
    <img src={element.img} /> 
 
    <img src={element.img2} /> 
    <img src={element.img3} /> 
   
    </div>
  
    </>
  ))
  
}
  
      
    </section>
   </article>
    </aside>
   
    </>
  )
}

export default Home