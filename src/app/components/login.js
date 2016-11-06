import React from 'react'

export default () => {
	return (
		<div>
			<h3>Login</h3>
			<form>
				Username: <input type='text' name='username'/><br/>
				Password: <input type='password' name='password'/><br/>
				<input type="submit"/>
			</form>
		</div>
	);
}