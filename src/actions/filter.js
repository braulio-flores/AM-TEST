import { types } from "../types/types"

export const setFilter = (filter) =>{
    return {
        type: types.filterSetFilter,
        payload: filter
    }
}