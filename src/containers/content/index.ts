import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Content } from './content';
import { IStore } from '../../store/reducers';
import { getUserPending } from '../../store/actions/user.actions';

const mapStateToProps = (state: IStore) => ({
    search: state.search,
    users: state.users,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getUsers: () => dispatch(getUserPending())
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
