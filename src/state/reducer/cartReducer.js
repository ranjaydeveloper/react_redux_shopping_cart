import ActionType from "../constent";


const initialState = {
    cart:[]
}
export const CartReducer = (state=initialState, {type, payload})=>{
    switch (type) {
        case ActionType.ADD_CART:            
            const ItemIndex = state.cart.findIndex((item)=> item.id === payload.id);
            if(ItemIndex >= 0){ 
               state.cart[ItemIndex].quantity +=1;    
               return {...state, cart:[...state.cart]}               
            }else{
                const temp = {...payload, quantity:1}
                return {...state, cart:[...state.cart,temp]}
            }            
    
        case ActionType.REMOVE_CART:             
            const data = state.cart.filter((el)=> el.id !== payload);
            return {...state, cart:data}

        case ActionType.DECREMENT_QUINTITY:
            
            const ItemIndexOfDecrement = state.cart.findIndex((elm) => elm.id === payload);

            if(state.cart[ItemIndexOfDecrement].quantity >= 2){
                state.cart[ItemIndexOfDecrement].quantity -= 1;
                return{
                    ...state,
                    cart:[...state.cart]
                }
            }else{
                const data = state.cart.filter((el)=> el.id !== payload);
                return {...state, cart:data}
            }

        default:
            return state;
    }
}