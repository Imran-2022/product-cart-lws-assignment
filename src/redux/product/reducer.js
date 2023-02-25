import { ADD_PRODUCT,QUANTITY_INCREMENT,QUANTITY_DECREMENT,QUANTITY_CHANGE_WHEN_DELETE_CARTITEM} from './actionsTypes'
import initialState from './initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state,action.payload
            ]
       
        case QUANTITY_DECREMENT:
            return [...state.map(item => {
                if (item.product_id === action.payload) {
                    if(item.product_quantity>0){
                        item.product_quantity--;
                    }
                }
                return item;
            })]
       
        case QUANTITY_INCREMENT:
            return [...state.map(item => {
                if (item.product_id === action.payload) {
                    item.product_quantity++;
                }
                return item;
            })]
       
        case QUANTITY_CHANGE_WHEN_DELETE_CARTITEM:
            return [...state.map(item => {
                if (item.product_id === action.payload.product_id) {
                    item.product_quantity+=action.payload.product_count;
                }
                return item;
            })]
       
        default:
            return state;
    }
}

export default reducer;