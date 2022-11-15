import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import lupa from './img/lupa.png'
import { getPizzasFiltradas } from './service/pizzas';
import pizza from './img/pizza.png'
import {  Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import Footer from './footer/Footer';
const Buscador = () => {
  const navigate = useNavigate();
  let initialstate = {}
  const[pizzas, setPizzas] = useState([]);
  const[params,setParams] = useSearchParams();
  const[d,setd] = useState(initialstate)

  console.log(pizzas.length !==0)
   const searchVuelosF= async(f,para)=>{
    console.log(para)

    console.log(params)

  console.log(f)
   let pizaF = await getPizzasFiltradas(para)
  setPizzas(pizaF)
   console.log(pizzas)
   }



const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();


const onSubmit = async({busqueda}) => {
let para = String(busqueda)
 setParams({
  name:`${para}`

})

let f =  params.get('name') ?? '';
  
setd(f)
await searchVuelosF(f,para)
}

const redireccion =({target})=>{
  console.log(target.id)
navigate(`/pizzas?name=${target.id}`)
}

  return (<>
    <form className='busqueda' onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Pizza de peperoni,mexicana,ha...' className='busqueda__input' type='text'         {...register("busqueda", { required: true  })}></input>
      <img src={lupa} className='lupa'/>
    </form>
   
    <article className='body'>

    {pizzas.length !==0&& <div className=''><p><b>{pizzas.length} Resultados</b></p></div>}

{

    pizzas.map((element,index)=>(
    

    <>
    <div className='d'   >
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
{pizzas.length===0&& <div className='absoluto'><img src={pizza} className='pizzita'/> <p>Busca la pizza que más te gusta</p></div>}
    </article>
 
   <Footer/>
    </>
  )
}

export default Buscador