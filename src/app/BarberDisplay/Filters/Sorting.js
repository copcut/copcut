import React from 'react'
import Dropdown from 'react-dropdown'

class Sorting extends React.Component{
	const options = [
		{}
	]

	render(){
	    return(
			<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
	    );
	}
}
export default Sorting;