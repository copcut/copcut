/**
 * Created by Victor on 10/23/2016.
 */
import React from 'react'
import Price from './Price'
import Search from './Search'
import Hairstyle from './Hairstyle'
import Sorting from './Sorting'

class FiltersTable extends React.Component {
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
        this.handleSorting = this.handleSorting.bind(this);
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
                <h1>Test</h1>
                <Search onSearchInput={this.handleSearch} filterBarber={this.state.filterBarber} />
                <Price onHandlePrice = {this.handlePrice} />
                <Sorting onHandleSorting = {this.handleSorting}/>
                <Hairstyle onHandleHairstyle = {this.handleSorting}/>
            </div>
        );
    }
}

export default FiltersTable;

