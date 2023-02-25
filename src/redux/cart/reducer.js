import { ADD_TO_CART,DELETE_FROM_CART,INCREMENT_CART_ITEM,DECREMENT_CART_ITEM} from './actionsTypes'
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
       
        case INCREMENT_CART_ITEM:
            return [...state.map(item => {
                if (item.product_id === action.payload) {
                    item.product_count++;
                }
                return item;
            })]
       
        case DECREMENT_CART_ITEM:
            return [...state.map(item => {
                if (item.product_id === action.payload) {
                    if(item.product_count>1){
                        item.product_count--;
                    }
                }
                return item;
            })]
       
        default:
            return state;
    }
}

export default reducer;