import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App, Home, RegisterBarber, RegisterUser, Login } from './components'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="/register/barber" component={RegisterBarber} />
		<Route path="/register/user" component={RegisterUser} />
		<Route path="/login" component={Login} />
	</Route>
);