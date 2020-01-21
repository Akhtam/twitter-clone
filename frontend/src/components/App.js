import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/routeUtil';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/NavbarContainer';

import TweetsContainer from './tweets/TweetsContainer';
import MainPage from './main/MainPage';
import LoginFormContainer from './session/LoginFormContainer';
import SignupFormContainer from './session/SignupFormContainer';
import ProfileContainer from './profile/ProfileContainer';
import TweetComposeContainer from './tweets/TweetComposeContainer';

const App = () => (
	<div>
		<NavBarContainer />
		<Switch>
			<AuthRoute exact path='/' component={MainPage} />
			<AuthRoute exact path='/login' component={LoginFormContainer} />
			<AuthRoute exact path='/signup' component={SignupFormContainer} />

			<ProtectedRoute exact path='/tweets' component={TweetsContainer} />
			<ProtectedRoute
				exact
				path='/profile'
				component={ProfileContainer}
			/>
			<ProtectedRoute
				exact
				path='/new_tweet'
				component={TweetComposeContainer}
			/>
		</Switch>
	</div>
);

export default App;
