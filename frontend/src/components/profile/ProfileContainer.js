import { connect } from 'react-redux';
import { fetchUserTweets } from '../../actions/tweetActions';
import Profile from './Profile';

const mapStateToProps = state => {
	return {
		tweets: Object.values(state.tweets.user),
		currentUser: state.session.user
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchUserTweets: id => dispatch(fetchUserTweets(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
