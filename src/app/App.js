/**
 * Created by Victor on 10/14/2016.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Barber from './BarberDisplay/Barber'
/* Hairstyle (black haircut), Price, Search, Sorting
filterBarber = {this.state.filterBarber}
prices = {this.state.prices}
sorting = {this.state.sorting}
hairstyle = {this.state.hairstyle}
barbers = {this.props.profile}
*/
const BARBERS = [
    {
    	firstname: "Victor", 
    	lastname: "Cheng", 
    	cuts: ["Select an option" ,"All cuts", "Fade", "Bowlcut"],
    	ratings: 1,
    	profilepicture: "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg", 
    	rate: 13, 
    	yearscut: 3, 
    	description: "I've ben cutting hair since I was born. I love touching people's hair"
    },
	{
		firstname: "David",
		lastname: "Cheng",
		cuts: ["All cuts", "Select an option"],
		ratings: 2,
		profilepicture: "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
		rate: 16,
		yearscut: 3,
		description: "I've ben cutting hair since I was born. I love touching people's hair"
	},
	{
		firstname: "Danny",
		lastname: "Cheng",
		cuts: ["Buzzcut", "All cuts", "Select an option"],
		ratings: 4.6,
		profilepicture: "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
		rate: 16,
		yearscut: 3,
		description: "I've ben cutting hair since I was born. I love touching people's hair"
	},
	{
		firstname: "Mitchel",
		lastname: "Cheng",
		cuts: ["All cuts", "Taper", "Bowlcut", "Select an option"],
		ratings: 4.2,
		profilepicture: "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
		rate: 21,
		yearscut: 3,
		description: "I've ben cutting hair since I was born. I love touching people's hair"
	},
	{
		firstname: "Kushal",
		lastname: "Cheng",
		cuts: ["buzzcut", "Select an option"],
		ratings: 3,
		profilepicture: "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
		rate: 29,
		yearscut: 3,
		description: "I've ben cutting hair since I was born. I love touching people's hair"
	},
];

ReactDOM.render(<Barber profile = {BARBERS}/>, document.getElementById('app'));