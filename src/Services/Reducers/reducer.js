import { Add_TO_CART,REMOVE_TO_CART } from "../constants";

const initialState = {
    cardData: []
}
export default function cardItems(state = initialState, action) {
    switch (action.type) {
        case Add_TO_CART:
            console.warn('reducer',action)
            return [
                ...state,
                {cardData: action.data}
            ]

            case REMOVE_TO_CART:
                //console.warn('reducer',action)
                state.pop();
                return [
                    ...state,
                   
                ]
            
        default:
            return state
    }
}