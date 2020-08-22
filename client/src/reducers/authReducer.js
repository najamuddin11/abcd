import { SET_CURRENT_USER, SET_CURRENT_ORGANIZER } from '../actions/types'
import isEmpty from '../validation/is-empty'

const initialState = {
    isAuthenticated: false,
    isOrganizer:false,
    organizer:{},
    user: {},
}

export default (state=initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        case SET_CURRENT_ORGANIZER:
            return {
                ...state,
                isOrganizer: !isEmpty(action.payload),
                organizer: action.payload
            }
        default:
            return state;
    }
}