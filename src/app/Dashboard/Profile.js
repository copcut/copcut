/**
 * Created by Victor on 11/3/2016.
 */
/**
 * Created by Victor on 11/2/2016.
 */

class Profile extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
              <img src={this.props.barberpic} > </img>
                <h1> {this.props.firstname} {this.props.lastname}</h1>
            </div>
        );
    }
}
export default Profile;