/**
 * Created by Victor on 10/30/2016.
 */
import React from 'react'

class IndividualBarber extends React.Component{

    //description is shortened description
    render(){
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.yoe}</td>
                <td>{this.props.description}</td>
                <td>{this.props.rate}</td>
                <td>{this.props.review}</td>
                <td><img src={this.props.picture} /></td>
            </tr>
        );
    }
}

export default IndividualBarber;