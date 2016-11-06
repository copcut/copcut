/**
 * Created by Victor on 11/2/2016.
 */
import Profile from './Profile'
import Payment from './Payment'
import RequestDashboard from './Requests/RequestDashboard'
import Transaction from './Transaction/Transaction'
import QuickLinks from './QuickLinks'
import React from 'react'



const DASHBOARD = [
    {
        barberpic: "i2.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
        firstname: "David",
        lastname: "Cheng",
        venmo: "@danny-cho-3",
        totalEarnings: 100,
        totalAmount: 25,
        mostCutsAday: 5
    }
];

class Dashboard extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <Profile barberpic = {DASHBOARD[0].barberpic} firstname = {DASHBOARD[0].firstname} lastname = {DASHBOARD[0].lastname}/>
                <Payment venmo = {DASHBOARD[0].venmo}/>
                <QuickLinks/>
                <RequestDashboard />
                <Transaction totalEarnings = {DASHBOARD[0].totalEarnings} totalAmount = {DASHBOARD[0].totalAmount} mostCutsAday = {DASHBOARD[0].mostCutsAday}/>
            </div>

        );
    }
}
export default Dashboard;