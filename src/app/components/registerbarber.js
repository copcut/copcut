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

			Address: <input type='text' name='address' /><br/>
			City: <input type='text' name='city' /><br/>
			Country: <input type='text' name='country' /><br/>
			Post Code: <input type='text' name='postcode' maxlength="15" /><br/>
			Phone Number: <input type='text' name='phonenumber' maxlength="50" /><br/>

			Profile Picture: <input type='file' name='profilepicture' /><br/>
			Years Cut: <input type='number' name='yearscut' min='0' /><br/>
			Description: <textarea name="description" rows="10" cols="30"></textarea><br/>
			<input type="submit" /> <input type="reset"/>
		</form>
	);
}