import ACTIONTYPES from '../actions/action.types'
const initialState = {
    wip: false,
    modal: null,
    notification: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIONTYPES.UI.SET_WIP:
            return {
                ...state,
                wip: true
            }
        case ACTIONTYPES.UI.UNSET_WIP:
            return {
                ...state,
                wip: false
            }

        default:
            return {
                ...state
            }
    }
}