import actions from "../actions";
const { ActionTypes } = actions;

const initialState = {
    wip: false,
    modal: null,
    notification: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.UI.SET_WIP:
            return {
                ...state,
                wip: true
            }
        case ActionTypes.UI.UNSET_WIP:
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