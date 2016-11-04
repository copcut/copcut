/**
 * Created by Victor on 11/3/2016.
 */
/**
 * Created by Victor on 11/2/2016.
 */
import Request from './Request'
var USER_REQUESTS = [
    {
        user_firstname : "Victor",
        user_lastname : "Cheng",
        date_time : "9/5/16 10:20-10:40",
        user_picture : "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
        user_message : "Hey! I'm looking for a cut by Friday. Wondering if you can fulfill my request"
    },
    {
        user_firstname : "Danny",
        user_lastname : "Cheng",
        date_time : "9/5/16 10:40-11:00",
        user_picture : "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
        user_message : "Hey! I'm looking for a cut by Friday. Wondering if you can fulfill my request"
    },
    {
        user_firstname : "Ankush",
        user_lastname : "Cheng",
        date_time : "9/5/16 11:00-11:20",
        user_picture : "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
        user_message : "Hey! I'm looking for a cut by Friday. Wondering if you can fulfill my request"
    },
]

class RequestDashboard extends React.Component{
    var rows = [];

    constructor(props){
        super(props);
    }
    render(){
        return(
            <h1> hello </h1>
        );
    }
}
export default RequestDashboard;