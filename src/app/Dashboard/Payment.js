/**
 * Created by Victor on 11/3/2016.
 */
/**
 * Created by Victor on 11/2/2016.
 */

class Payment extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        //add additional html
        return(
            <div>
                <h1> Payment </h1>
                <h1> {this.props.venmo} </h1>
            </div>
        );
    }
}
export default Payment;