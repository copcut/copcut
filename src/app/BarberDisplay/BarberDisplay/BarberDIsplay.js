/**
 * Created by Victor on 10/28/2016.
 */
import React from 'react'
import IndividualBarber from './IndividualBarber'
import SortingAlgo from './SortingAlgo'

class BarberDisplay extends React.Component {
    render(){
        var rows = [];
        this.props.barbers.forEach((barber) => {
            //rate filtering
            var pricecategory;
            if( barber.rate <= 10){
                pricecategory = 0;
            }
            if(barber.rate > 10 && barber.rate <= 20){
                pricecategory = 1;
            }
            if(barber.rate > 20){
                pricecategory = 2;
            }

            //search filtering
            var matcher_first = new RegExp("/" + barber.firstname + "/", "i");
            var matcher_last = new RegExp("/" + barber.lastname + "/", "i");

            if ((matcher_first.test(this.props.filterBarber) || matcher_last.test(this.props.filterBarber)) &&
                barber.cuts.indexOf(this.props.hairstyle) >= 0 &&
                this.props.prices[pricecategory] == true)
            {
                var shortDescription = barber.description.substring(0, 120);
                rows.push(
                    <IndividualBarber
                        keys={barber.id}
                        name={barber.firstname.concat(' ', barber.lastname)}
                        yoe={barber.yearscut}
                        description={shortDescription}
                        rate={barber.rate}
                        review={barber.ratings}
                        picture={barber.profilepicture}
                    />
                );
            }
        });
        //include sorting by whatever on cuts.

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