/**
 * Created by Victor on 11/3/2016.
 */
class IndividualCuts extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1> {this.props.firstname} {this.props.lastname} </h1>
                <h3> {this.props.review } </h3>
                <h3> {this.props.date} </h3>
                <h3> {this.props.haircut_type} for {this.props.haircut_price}</h3>
            </div>
        );
    }
}