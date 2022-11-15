import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AppContext } from '../../routes/Router'
import '../style/style.scss'
const Header = () => {
  const{usuarios, setusuarios} = useContext(AppContext)
  const navigate = useNavigate();
  useEffect(() => {
    ruta()
    console.log(usuarios)
    console.log(usuarios.length === 0)
  }, [])
  
  const ruta =()=>{
    if(usuarios.length === 0){
      navigate('/')
    }
  }

  return (
  <>
    <header className='header'>
    <div >
        <p className='header__title'><b> Home </b></p>
        <p className='header__subtitle'>¡Que bueno verte {usuarios[0].nombre}!</p>
    </div>
    <div ><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' className='header__img'/></div>
    </header>
 
    <Outlet/>
    </>
  
  )
}

export default Header