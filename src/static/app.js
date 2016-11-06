import React from 'react'
import routes from '../app/routes'
import { Router, browserHistory } from 'react-router'
import { render } from 'react-dom'

render((
	<Router routes={routes} history={browserHistory} />
), document.getElementById('app'))