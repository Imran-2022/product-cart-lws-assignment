import {ADD_TO_CART,DELETE_FROM_CART,INCREMENT_CART_ITEM,DECREMENT_CART_ITEM} from './actionsTypes'

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
export const incrementCartItem =(id)=>{
    return {
        type:INCREMENT_CART_ITEM,
        payload:id
    }
}
export const decrementCartItem =(id)=>{
    return {
        type:DECREMENT_CART_ITEM,
        payload:id
    }
}
