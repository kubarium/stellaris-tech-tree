import {Actions} from '../Actions'
import Tree from '../components/Tree'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        tree: state.tree
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
}
 */
export default connect(mapStateToProps, null, null)(Tree)