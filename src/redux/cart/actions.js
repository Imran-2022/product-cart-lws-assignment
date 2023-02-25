import {ADD_TO_CART,DELETE_FROM_CART} from './actionsTypes'

export const addToCart =(dt)=>{
    return {
        type:ADD_TO_CART,
        payload:dt
    }
}

export const deleteFromCart =(id)=>{
    return {
        type:DELETE_FROM_CART,
        payload:id
    }
}
