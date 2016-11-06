/**
 * Created by Victor on 10/23/2016.
 */
import React from 'react'
import Price from './Filters/Price'
import Search from './Filters/Search'
import Hairstyle from './Filters/Hairstyle'
import Sorting from './Filters/Sorting'
import BarberDisplay from './BarberDisplay/BarberDisplay'
// BARBERDISPLAY JSON DATA
const BARBERS = [
    {
        firstname: "victor",
        lastname: "cheng",
        id: 1,
        cuts: ["Select an option" ,"All cuts", "Fade", "Bowlcut"],
        ratings: 1,
        profilepicture: "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
        rate: 13,
        yearscut: 3,
        totalcuts: 4,
        description: "I've ben cutting hair since I was born. I love touching people's hair"
    },
    {
        firstname: "david",
        lastname: "cheng",
        id: 2,
        cuts: ["All cuts", "Select an option"],
        ratings: 2,
        profilepicture: "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
        rate: 16,
        yearscut: 3,
        totalcuts: 5,
        description: "I've ben cutting hair since I was born. I love touching people's hair"
    },
    {
        firstname: "danny",
        lastname: "cheng",
        id: 3,
        cuts: ["Buzzcut", "All cuts", "Select an option"],
        ratings: 4.6,
        profilepicture: "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
        rate: 16,
        yearscut: 3,
        totalcuts: 6,
        description: "I've ben cutting hair since I was born. I love touching people's hair"
    },
    {
        firstname: "mitchel",
        lastname: "cheng",
        id: 4,
        cuts: ["All cuts", "Taper", "Bowlcut", "Select an option"],
        ratings: 4.2,
        profilepicture: "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
        rate: 21,
        totalcuts: 7,
        yearscut: 3,
        description: "I've ben cutting hair since I was born. I love touching people's hair"
    },
    {
        firstname: "kushal",
        lastname: "cheng",
        id: 5,
        cuts: ["buzzcut", "Select an option"],
        ratings: 3,
        profilepicture: "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
        rate: 29,
        totalcuts: 8,
        yearscut: 3,
        description: "I've ben cutting hair since I was born. I love touching people's hair"
    },
];

class Barbers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterBarber: '',
            prices : [false, false, false],
            sorting: '',
            hairstyle: "Select an option"
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

    handlePrice(prices1, prices2, prices3){
        this.setState({
           prices : [prices1, prices2, prices3]
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

    render() {
        return (
            <div>
                <h1>Victor</h1>
                <Search onSearchInput={this.handleSearch} filterBarber={this.state.filterBarber} />
                <Price onHandlePrice = {this.handlePrice} prices = {this.state.prices}/>
                <Sorting onHandleSorting = {this.handleSorting} sorting = {this.state.sorting}/>
                <Hairstyle onHandleHairstyle = {this.handleHairstyle} hairstylte = {this.state.hairstyle}/>

                <BarberDisplay
                   filterBarber = {this.state.filterBarber}
                   prices = {this.state.prices}
                   sorting = {this.state.sorting}
                   hairstyle = {this.state.hairstyle}
                   barbers = {BARBERS}
                />
            </div>
        );
    }
}

export default Barbers;
//list all the barbers in a table