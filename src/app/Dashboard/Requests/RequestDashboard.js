/**
 * Created by Victor on 11/3/2016.
 */
/**
 * Created by Victor on 11/2/2016.
 */
import Request from './Request'
import React from 'react'
var USER_REQUESTS = [
    {
        user_firstname : "Victor",
        user_lastname : "Cheng",
        id : 1,
        date_time : "9/5/16 10:20-10:40",
        user_picture : "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
        user_message : "Hey! I'm looking for a cut by Friday. Wondering if you can fulfill my request"
    },
    {
        user_firstname : "Danny",
        user_lastname : "Cheng",
        id: 2,
        date_time : "9/5/16 10:40-11:00",
        user_picture : "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
        user_message : "Hey! I'm looking for a cut by Friday. Wondering if you can fulfill my request"
    },
    {
        user_firstname : "Ankush",
        user_lastname : "Cheng",
        id: 3,
        date_time : "9/5/16 11:00-11:20",
        user_picture : "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
        user_message : "Hey! I'm looking for a cut by Friday. Wondering if you can fulfill my request"
    },
    {
        user_firstname : "Harry",
        user_lastname : "Cheng",
        id: 3,
        date_time : "9/5/16 11:00-11:20",
        user_picture : "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
        user_message : "Hey! I'm looking for a cut by Friday. Wondering if you can fulfill my request"
    },
    {
        user_firstname : "John",
        user_lastname : "Cheng",
        id: 3,
        date_time : "9/5/16 11:00-11:20",
        user_picture : "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
        user_message : "Hey! I'm looking for a cut by Friday. Wondering if you can fulfill my request"
    },
];

class RequestDashboard extends React.Component{
    //add server call on willMount
    constructor(props){
        super(props);
        this.state = {
            index1 : 0,
            index2 : 3
        }
    }
    onAccept () {
        var temp1 = this.state.index1;
        var temp2 = this.state.index2;
        this.setState(
            {
                index1: temp1 + 1,
                index2: temp2 + 1
            }
        );
    }
    onDecline () {

    }
    render(){
        var rows = [];
        USER_REQUESTS.slice(index1, index2).map((user) => {
                rows.push(
                    <Request
                        onAccept = {this.onAccept}
                        onDecline = {this.onDecline}
                        index1 = {index1}
                        index2 = {index2}
                        key={user.id}
                        user_picture = {user.user_picture}
                        user_firstname = {user.user_firstname}
                        user_lastname = {user.user_lastname}
                        user_message = {user.user_message}
                        date_time = {user.date_time}
                    />
                );
            }
        );
        return(
            <div>
                <h1> Requests {USER_REQUESTS.length} </h1>
                {rows}
            </div>
        );
    }
}
export default RequestDashboard;