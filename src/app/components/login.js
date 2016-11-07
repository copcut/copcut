import React from 'react'
import Promise from 'bluebird'
import 'whatwg-fetch'

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {error: null};
	}

	handleSubmit() {
		const data = {
			username: this.refs.username.value,
			password: this.refs.password.value
		};

		fetch('/api/login', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(data => {
			if(data.success) {
				this.setState({error: "success"});
			}
			else {
				this.setState({error: data.error});
			}
		});
	}

	render() {
		let errorDisplay = null;
		const style = {
			color: "red"
		};
		if(this.state.error) {
			errorDisplay = <p style={style}>{this.state.error}</p>
		}
		return (
			<div>
				<h3>Login</h3>
				{errorDisplay}
				<div>
					Username: <input ref='username' type='text'/><br/>
					Password: <input ref='password' type='password'/><br/>
					<button onClick={this.handleSubmit.bind(this)}>Login</button>
				</div>
			</div>
		);
	}
}

export default Login;