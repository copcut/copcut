/**
 * Created by Victor on 10/14/2016.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import FiltersTable from './FiltersTable'

// NEED to include schedule data, firstt and last name?
var BARBERS = [
    {firstname:"Victor", lastname: "Cheng", cuts: ["bold", "buzz", "normal"], ratings: 4.2, profilepicture:"i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg", rate:13, yearscut: 3, description:"I've ben cutting hair since I was born. I love touching people's hair"},
];
var users = [
    {}
];

ReactDOM.render(<FiltersTable/>, document.getElementById('app'));