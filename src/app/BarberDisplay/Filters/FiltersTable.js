/**
 * Created by Victor on 10/23/2016.
 */
import React from 'react'
//import Price from './Price'
//import Search from './Search'
//import Hairstyle from './Hairstyle'
//import Sorting from './Sorting'

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
        this.handleSorting = this.handleSorting.bind(this);
        this.handleHairstyle = this.handleHairstyle.bind(this);
    }
    handleSearch(filterBarber){
        this.setState({
            filterBarber: filterBarber
        });
        // every time there is a change, pass props to Barber.js
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
                /*
                <Price onHandlePrice = {this.handlePrice} filterPrices = {this.state.prices}/>

                <Sorting onHandleSorting = {this.handleSorting}/>
                <Hairstyle onHandleHairstyle = {this.handleSorting}/>
                */
            </div>
        )
    }
}
export default FiltersTable;



class Search extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
        this.props.onSearchInput(this.refs.searchInput.value());
    }
    render(){
        return(
            <Form>
                <input type="text" placeholder="Search..." ref="searchInput" value={this.props.filterBarber} onChange={this.handleChange}/>
            </Form>
        );
    }
}
Search.propTypes = {filterBarber : React.PropTypes.string};
Search.defaultProps = {filterBarber: ""};

class Price extends React.Component {
    constructor(props) {
        super(props);
        this.priceFilter = this.priceFilter.bind(this);
        this.state = {
            price1: false,
            price2: false,
            price3: false,
        }
    }

    handleClick() {
        if(this.refs.Price1.checked){
            this.state.price1 = true;
        }
        else if (this.refs.Price2.checked){
            this.state.price2 = true;
        }
        else if (this.refs.Price3.checked){
            this.state.price3 = true;
        }
        this.props.onHandlePrice({price1, price2, price3});
    }

    render() {
        return (
            <form>
                <div className="checkbox1">
                    <label>
                        <input type="checkbox" onChange={this.handleClick()} ref = "Price1" checked = {this.state.price[0]}
                               value="option1"/>
                        Price Under $10
                    </label>
                </div>
                <div className="checkbox2">
                    <label>
                        <input type="checkbox" onChange={this.handleClick()} ref="Price2" checked = {this.state.price[1]}
                               value="option2"/>
                        Between $10-$20
                    </label>
                </div>
                <div className="checkbox3">
                    <label>
                        <input type="checkbox" onChange={this.handleClick()} ref="Price3" checked = {this.state.price[2]}
                               value="option3"/>
                        $20+
                    </label>
                </div>
            </form>
        );
    }
}




class Hairstyle extends React.Component{

    render(){
        return(
            <select name="Hairstyle" id="hairstyle" value="3">
                <option selected="selected">1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        );
    }
}


class Sorting extends React.Component{
render(){
    return(
        <select name="Sorting" id="sorting" value="3">
            <option selected = "selected">1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    );
}
}



