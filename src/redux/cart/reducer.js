import { ADD_TO_CART,DELETE_FROM_CART} from './actionsTypes'
import initialState from './initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log(action.payload);
            const newItemId = action.payload.product_id;
            const existingItem = state.find(item => item.product_id === newItemId);
            console.log("existing",existingItem);
            if (existingItem) {
                existingItem.product_count++;
            } else {
                state.push(action.payload);
            }
            return [...state];
       
        case DELETE_FROM_CART:
            const filterCart=state.filter(dt=>dt.product_id!==action.payload)
            return filterCart;
       
        default:
            return state;
    }
}

export default reducer;