import React from 'react'
import Dropdown from 'react-dropdown'


const options = [
    'Price(Highest to Lowest)', 'Price(Lowest to Highest)', 'Rating', 'Popularity'
];

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
                placeholder={this.props.sorting}
            />
	    );
	}
}
export default Sorting;