import { connect } from 'react-redux';
import { logout } from '../../actions/sessionActions';

import NavBar from './Navbar';

const mapStateToProps = state => ({
	loggedIn: state.session.isAuthenticated
});

export default connect(mapStateToProps, { logout })(NavBar);
