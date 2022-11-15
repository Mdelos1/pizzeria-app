import React, { createContext, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Carrito from "../carrito/Carrito";
import Home from "../Home/Home";
import Login from "../sesion/Login";
import Register from "../sesion/Register";
import Header from "../Home/Header/Header";
import Footer from "../Home/footer/Footer";
import Buscador from "../Home/Buscador";
import Detalles from "../Home/Detalles";
import ProcesoPedido from "../carrito/ProcesoPedido";
export const AppContext = createContext([])


const Router = () => {

    const [pizzas, setPizzas] = useState({})
    const[contador,setContador] = useState(1);
    const [usuarios, setUsuarios] = useState([])
    return ( 
<AppContext.Provider value={{pizzas,setPizzas,usuarios,setUsuarios,contador,setContador}}>
        <BrowserRouter>
            <Routes>
            <Route  element={<Footer/>} >
            <Route  element={<Header/>} >
            
            <Route path="buscar" element={<Buscador />} />
                <Route path="home" element={<Home />} />

                
        </Route>
        
            </Route>
            <Route path=":pizza" element={<Detalles />} />
          
                <Route path="/" element={<Login />} />
                <Route path="register"  element={<Register />} />
                <Route path="carrito"  element={<Carrito />} />
                <Route path="pedido"  element={<ProcesoPedido />} />
            
            </Routes>
        </BrowserRouter>
        </AppContext.Provider>
    )
}

export default Router;