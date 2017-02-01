import React from 'react'
import ReactDOM from 'react-dom'

import Body from './components/Body.js'

class Foundation extends React.Component {
	render() {
		return (<h2>Yes it really is! </h2>)
	}
}
class Layout extends React.Component {
	render() {
		return (<div>
			<h1>it's @@@ working </h1>
			<Foundation/>
			<Body/>
			</div>)
	}
}

var app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);