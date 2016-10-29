import React from 'react'

class Search extends React.Component{
    constructor(props){
        super(props);
        this.doSearch = this.doSearch.bind(this);
    }
    doSearch(){
        this.props.onSearchInput(this.refs.searchInput.value);
    }
    render(){
        return(
            <form>
                <input type="text" placeholder="Search..." ref="searchInput" value={this.props.filterBarber} onChange={this.doSearch}/>
            </form>
        );
    }
}
Search.propTypes = {filterBarber : React.PropTypes.string};
Search.defaultProps = {filterBarber: ""};

export default Search;