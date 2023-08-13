
import ActionType from "../constent"

export const ADD_TO_CART = (addproduct)=>{
    return {
        type: ActionType.ADD_CART,
        payload:addproduct
    }
}

export const REMOVE_TO_CART = (RCartItem)=>{
    return {
        type: ActionType.REMOVE_CART,
        payload:RCartItem
    }
}