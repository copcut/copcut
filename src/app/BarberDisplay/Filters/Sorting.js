import React from 'react'
import Dropdown from 'react-dropdown'


const options = [
    'Popular', 'Rating', 'Number of Cuts', 'Alphabetical'
]

class Sorting extends React.Component{

    constructor(props){
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }
    
	onSelect(option){
        this.props.onHandleSorting(this.refs.Dropdown.value);
    }

	render(){
	    return(
			<Dropdown
                options={options}
                ref = "Dropdown"
                onChange={this.onSelect}
                value={this.props.sorting}
                placeholder="Select an option"
            />
	    );
	}
}
export default Sorting;