import { types } from "../types/types";

const inicialState = {
    filter: null
}

export const filterReducer = (state = inicialState, action) => {
    switch (action.type) {
        case types.filterSetFilter:
            return {
                ...state,
                filter: (state.filter && state.filter === action.payload) ? null : action.payload 
            }    
        default:
            return state;
    }
}