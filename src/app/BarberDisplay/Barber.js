/**
 * Created by Victor on 10/23/2016.
 */
import React from 'react'
import FiltersTable from './Filters/FiltersTable'
import BarberDisplay from './BarberDisplay/BarberDisplay'

class Barbers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterWord : '',
            prices : [false, false, false],
            sorting: 0,
            hairstyle: 0
        }
        this.searchChange = this.searchChange.bind(this);
    }
    searchChange(filterWord){
        this.setState({
           filterWord : filterWord 
        });
    }
	render() {
        return (
            <div>
              <FiltersTable onSearch={this.searchChange} filteredWord = {this.state.filterWord}/>
              <BarberDisplay />
            </div>
        );
    }
}

export default Barbers;
//list all the barbers in a table