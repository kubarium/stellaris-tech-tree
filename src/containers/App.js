import {Actions} from '../Actions'
import App from '../components/App'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
/* 
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch(actionCreator)
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        mergeProp: mergePropVal
    }
} */

export default connect(mapStateToProps, null, null)(App)