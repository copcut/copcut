/**
 * Created by Victor on 10/23/2016.
 */

import React from 'react'
import BarberTable from './Filters./BarberTable'
import Price from './Price'
import Search from './Search'

class FiltersTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterBarber: '',
            prices : [false, false, false],
            sorting: 0,
            hairstyle: 0
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleSorting = this.handle.Sorting.bind(this);
        this.handleHairstyle = this.handleHairstyle.bind(this);
    }
    handleSearch(filterBarber){
        this.setState({
            filterBarber: filterBarber
        });
    }
    handlePrice(prices){
       this.setState({
          prices : prices
       });
    }
    handleSorting(sorting){
        this.setState({
            sorting: sorting
        });
    }
    handleHairstyle(hairstyle){
        this.setState({
            hairstyle: hairstyle
        });
    }

    render(){
        return(
            <div>
                <Search onSearchInput={this.handleSearch} filterBarber={this.state.filterBarber} />
                <Price onHandlePrice = {this.handlePrice} filterPrices = {this.state.prices}/>
                <Sorting onHandleSorting = {this.handleSorting}/>
                <Hairstyle onHandleHairstyle = {this.handleSorting}/>
                /* <BarberTable /> */

            </div>
        )
    }
}
export default FiltersTable;


class Sorting extends React.Component{

}

class Hairstyle extends React.Component{

}

