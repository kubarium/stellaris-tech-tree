import { Actions } from '../Actions'
import Area from '../components/Area'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        area: state.area,
        areas: state.areas
    }
}

export default connect(mapStateToProps, null, null)(Area)