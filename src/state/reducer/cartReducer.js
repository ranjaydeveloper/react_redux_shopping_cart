import ActionType from "../constent";


const initialState = {
    cart:[]
}
export const CartReducer = (state=initialState, {type, payload})=>{
    switch (type) {
        case ActionType.ADD_CART:
            console.log('payload: ', payload)
            return {...state, cart:[...state.cart,payload], quantity:1}
    
        default:
            return state;
    }
}