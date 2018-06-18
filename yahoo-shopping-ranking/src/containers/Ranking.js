import {connect} from 'react-redux';
import Ranking from '../components/Ranking';
import * as actions from '../actions/Ranking';

const initMapStateToProps = (state, ownProps) => ({
    categoryId: ownProps.categoryId
});

const mapDispatchToProps = dispatch => ({
    onMount(categoryId) {
        dispatch(actions.fetchRanking(categoryId));
    },
    onUpdate(categoryId) {
        dispatch(actions.fetchRanking(categoryId));
    }
});

export default connect(initMapStateToProps, mapDispatchToProps)(Ranking);
