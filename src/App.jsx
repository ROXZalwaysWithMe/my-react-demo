import React from 'react';
import { HashRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './router/route'

function App() {
	return (
		<Router>
			<div className="App">
				{ renderRoutes(routes) }
			</div>
		</Router>
	);
}
export default App;