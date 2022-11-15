import axios from "axios";



const URL_API = 'https://pizzeria-back.onrender.com';


export const getPizzas = async () => {
    try {
        const {data} = await axios.get(`${URL_API}/pizzas`)
        return data;
    } catch (error) {
        return []
    }
}
export const getPizzasFiltradas = async (name) => {
    try {
        const {data} = await axios.get(`${URL_API}/pizzas?name_like=${name}`)
        return data;
    } catch (error) {
        return []
    }
}
export const getComentarios = async (id) => {
    try {
        const {data} = await axios.get(`${URL_API}/comentarios?idPizzas=${id}`)
        return data;
    } catch (error) {
        return []
    }
}
export const getUsuarios = async (id) => {
    try {
        const {data} = await axios.get(`${URL_API}/usuarios?idPizza=${id}`)
        return data;
    } catch (error) {
        return []
    }
}