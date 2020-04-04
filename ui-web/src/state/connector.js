import { connect } from "react-redux"
import ACTIONCREATORS from './actions/action.creators'

const mapStateToProps = ({ ui }) => {
    return {
        state: {
            ui
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handlers: {
            ui: {
                setWip: () => dispatch(ACTIONCREATORS.UI.createAction_setWip()),
                unsetWip: () => dispatch(ACTIONCREATORS.UI.createAction_unsetWip())
            }
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)