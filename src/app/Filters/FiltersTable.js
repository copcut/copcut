/**
 * Created by Victor on 10/23/2016.
 */
import React from 'react'
import BarberTable from '././BarberDisplay/BarberTable'


class FiltersTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterBarber: '',
            priceCategory: 0,
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
            priceCategory: priceCategory,
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
            
            <Price />
            <Sorting />
            <Hairstyle />

            <BarberTable/>

        </div>
        )
    }
}
export default FiltersTable;




class Search extends React.Component{
    constructor(props){
        super(props);
        this.doSearch = this.doSearch.bind(this);
    }
    doSearch(){
        this.props.onSearchInput(this.refs.searchInput.value(),); // OR should i make it e.target.value and make parameter e)
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="Search..." ref="searchInput" value={this.props.filterBarber} onChange={this.doSearch}/>
            </div>
        );
    }
}
Search.propTypes = {filterBarber : React.PropTypes.string};
Search.defaultProps = {filterBarber: ""};



class Price extends React.Component{
    contructor(props){
      //noinspection JSAnnotator
        super(props);
        this.priceFilter = this.priceFilter.bind(this);
        this.state = {
            priceCategory : 0,
        }
    }
    priceFilter(){
        
    }
    render(){
        return(
                <form>
                    <div className="radio1">
                        <label>
                            <input type="radio" value="option1" checked={true} />
                            Price Under $10
                        </label>
                    </div>
                    <div className="radio2">
                        <label>
                            <input type="radio" value="option2" />
                            Between $10-$20
                        </label>
                    </div>
                    <div className="radio3">
                        <label>
                            <input type="radio" value="option3" />
                            $20+
                        </label>
                    </div>
                </form>
        );
    }
}

class Sorting extends React.Component{

}

class Hairstyle extends React.Component{

}

