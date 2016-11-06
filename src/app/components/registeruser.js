import React from 'react'

export default () => {
	return (
		<form>
			Username: <input type='text' name='username' maxlength='36' /><br/>
			Password: <input type='password' name='password' /><br/>
			Email: <input type='email' name='email' maxlength="320" /><br/>
			Birthday: <input type='date' name='birthday' /><br/>

			First Name: <input type='text' name='firstname' maxlength="50" /><br/>
			Middle Name: <input type='text' name='middlename' maxlength="50" /><br/>
			Last Name: <input type='text' name='lastname' maxlength="50" /><br/>
			Gender: <input type='text' name='gender' maxlength="1" /><br/>
			<input type="submit"/> <input type="reset"/>
		</form>
	);
}