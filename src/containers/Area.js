import * as Actions from '../Actions'

import Area from '../components/Area'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        areas: state.areas
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeArea: (event) => {
            dispatch(Actions.changeArea(event.target.dataset.area))
        },
        hoverArea: (event) => {
            dispatch(Actions.hoverArea(event.target.dataset.area))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(Area)