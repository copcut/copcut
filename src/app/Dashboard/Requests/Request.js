/**
 * Created by Victor on 11/3/2016.
 */
/**
 * Created by Victor on 11/2/2016.
 */

class Request extends React.Component{
    constructor(props){
        super(props);
    }
    Accept(){
        this.props.onAccept();
    }
    Decline(){
        this.props.onDecline();
    }
    render(){  
        return(
            <div>
                <img src={this.props.user_picture} > </img>
                <h1> {this.props.user_firstname} {this.props.user_lastname} </h1>
                <h3> {this.props.user_message} </h3>
                <h3> {this.props.date_time} </h3>
                <button type="button" onClick={this.Accept}> Accept </button>
                <button type = "button" onClick={this.Decline}> Decline </button>
            </div>
        );
    }
}
export default Request;