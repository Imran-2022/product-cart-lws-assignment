import {ADD_PRODUCT} from './actionsTypes'

export const addProduct =(dt)=>{
    return {
        type:ADD_PRODUCT,
        payload:dt
    }
}
