import { ADD_TO_ORDERER } from '../actions'
 
const initialState = 0
 
export function addToOrderer(state = initialState, action) {
    
    switch (action.type) {
        case ADD_TO_ORDERER:
            return Object.assign({}, state, {price: action.payload})
        default:
            return state 
    }
    
}