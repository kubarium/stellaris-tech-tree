import Leaf from '../components/Leaf'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        data: ownProps.data
    }
}

export default connect(mapStateToProps, null, null)(Leaf)