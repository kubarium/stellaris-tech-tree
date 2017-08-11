import Tree from '../components/Tree'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        tree: state.tree.filter(leaf => leaf.area === state.areas.filter(area => area.active).map(area => area.name)[0])
    }
}
export default connect(mapStateToProps, null, null)(Tree)