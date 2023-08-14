
import ActionType from "../constent"

export const ADD_TO_CART = (addproduct)=>{
    return {
        type: ActionType.ADD_CART,
        payload:addproduct
    }
}

export const REMOVE_TO_CART = (id)=>{
    return {
        type: ActionType.REMOVE_CART,
        payload:id
    }
}

export const ADD_QUINTITY = (addproduct)=>{
    return {
        type: ActionType.ADD_QUINTITY,
        payload:addproduct
    }
}

export const DECREMENT_QUINTITY = (id)=>{
    return{
        type: ActionType.DECREMENT_QUINTITY,
        payload: id

    }
}
