import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import PostCreate from './PostCreate';
import PostsList from './PostsList';
import PostDisplay from './PostDisplay';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="ui container">
					<Switch>
						<Route path="/new">
							<PostCreate />
						</Route>
						<Route path="/">
							<PostsList />
						</Route>
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
