import ACTIONTYPES from './action.types'
export default {
    UI: {
        createAction_setWip: () => {
            return {
                type: ACTIONTYPES.UI.SET_WIP
            }
        },
        createAction_unsetWip: () => {
            return {
                type: ACTIONTYPES.UI.UNSET_WIP
            }
        }
    }
}