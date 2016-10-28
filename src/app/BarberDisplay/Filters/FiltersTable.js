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
            price1 : false,
            price2 : false,
            price3 : false,
            sorting: 0,
            hairstyle: 0,
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleSorting = this.handle.Sorting.bind(this);
        this.handleHairstyle = this.handleHairstyle.bind(this);
    }
    handleSearch(filterBarber){
        this.setState({
            filterBarber: filterBarber,
        });
    }
    handlePrice(priceCategory){
        this.setState({
            price1: price1,
            price2: price2,
            price3: price3,
        });
    }
    handleSorting(sorting){
        this.setState({
            sorting: sorting,
        });
    }
    handleHairstyle(hairstyle){
        this.setState({
            hairstyle: hairstyle,
        });
    }

    render(){
        return(
        <div>
            <Search onSearchInput={this.handleSearch} filterBarber={this.state.filterBarber} />
            /*
            <Price onHandlePrice = {this.handlePrice} />
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

