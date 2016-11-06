/**
 * Created by Victor on 11/3/2016.
 */
/**
 * Created by Victor on 11/3/2016.
 */
/**
 * Created by Victor on 11/2/2016.
 */
import React from 'react'
class MoneyMatters extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        //add additional html
        return(
            <div>
                <a href="#"> View details </a>
                <h3> {this.props.totalEarnings} </h3>
                <h3> {this.props.totalAmount} </h3>
                <h3> {this.props.mostCutsAday} </h3>
            </div>
        );
    }
}
export default MoneyMatters;