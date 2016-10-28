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
                <h1>Test</h1>
                <Search onSearchInput={this.handleSearch} filterBarber={this.state.filterBarber} />
<<<<<<< HEAD
                <Price onHandlePrice = {this.handlePrice} filterPrices = {this.state.prices}/>
=======
                <Price onHandlePrice = {this.handlePrice} />
>>>>>>> 11db13125261d9ce8793bc310d27797eab4de674
                <Sorting onHandleSorting = {this.handleSorting}/>
                <Hairstyle onHandleHairstyle = {this.handleSorting}/>
            </div>
        )
    }
}

export default FiltersTable;

