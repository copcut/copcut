/**
 * Created by Victor on 10/28/2016.
 */
import React from 'react'
import IndividualBarber from './IndividualBarber'

class BarberDisplay extends React.Component {
    render(){
        var rows = [];
        var lastPointer = null;
        //Logic for filtering and displaying the correct barbers
        /*
        this.props.barbers.forEach((barber) => {
            if(barber.SOMETHING.indexOf()){

            }
        });
        <IndividualBarber barberData = {} />
       */
        return(
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Years of experience</th>
                    <th>Shortened Description</th>
                    <th>Rate</th>
                    <th>Review</th>
                    <th>Picture</th>
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}
export default BarberDisplay;