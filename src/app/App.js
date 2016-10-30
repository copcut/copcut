/**
 * Created by Victor on 10/14/2016.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Barber from './BarberDisplay/Barber'

const barbers = [
    {
    	firstname: "Victor", 
    	lastname: "Cheng", 
    	cuts: ["All cuts", "Fade", "Bowlcut"],
    	ratings: 1,
    	profilepicture: "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg", 
    	rate: 13, 
    	yearscut: 3, 
    	description: "I've ben cutting hair since I was born. I love touching people's hair"
    },
	{
		firstname: "david",
		lastname: "Cheng",
		cuts: ["All cuts"],
		ratings: 2,
		profilepicture: "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
		rate: 16,
		yearscut: 3,
		description: "I've ben cutting hair since I was born. I love touching people's hair"
	},
	{
		firstname: "Danny",
		lastname: "Cheng",
		cuts: ["Buzzcut", "All cuts"],
		ratings: 4.6,
		profilepicture: "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
		rate: 16,
		yearscut: 3,
		description: "I've ben cutting hair since I was born. I love touching people's hair"
	},
	{
		firstname: "Mitchel",
		lastname: "Cheng",
		cuts: ["All cuts", "Taper", "Bowlcut"],
		ratings: 4.2,
		profilepicture: "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
		rate: 21,
		yearscut: 3,
		description: "I've ben cutting hair since I was born. I love touching people's hair"
	},
	{
		firstname: "Victor",
		lastname: "Cheng",
		cuts: ["buzzcut"],
		ratings: 3,
		profilepicture: "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
		rate: 29,
		yearscut: 3,
		description: "I've ben cutting hair since I was born. I love touching people's hair"
	},
];

ReactDOM.render(<Barber profile = {barbers}/>, document.getElementById('app'));