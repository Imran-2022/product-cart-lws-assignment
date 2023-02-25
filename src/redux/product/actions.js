import {ADD_PRODUCT,QUANTITY_INCREMENT,QUANTITY_DECREMENT,QUANTITY_CHANGE_WHEN_DELETE_CARTITEM} from './actionsTypes'

export const addProduct =(dt)=>{
    return {
        type:ADD_PRODUCT,
        payload:dt
    }
}

export const incrementQuantity =(id)=>{
    return {
        type:QUANTITY_INCREMENT,
        payload:id
    }
}

export const decrementQuantity =(id)=>{
    return {
        type:QUANTITY_DECREMENT,
        payload:id
    }
}
export const quantityChange_cartDelete =(dt)=>{
    return {
        type:QUANTITY_CHANGE_WHEN_DELETE_CARTITEM,
        payload:dt
    }
}