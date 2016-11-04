/**
 * Created by Victor on 11/2/2016.
 */
import Profile from './Profile'
import Payment from './Payment'
import RequestDashboard from './Requests/RequestDashboard'
import Transaction from './Transaction/Transaction'
import QuickLinks from 'QuickLinks'



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
                <Profile barberpic = {DASHBOARD.barberpic} firstname = {DASHBOARD.firstname} lastname = {DASHBOARD.lastname}/>
                <Payment venmo = {DASHBOARD.venmo}/>
                <QuickLinks/>
                <RequestDashboard />
                <Transaction totalEarnings = {DASHBOARD.totalEarnings} totalAmount = {DASHBOARD.totalAmount} mostCutsAday = {DASHBOARD.mostCutsAday}/>
            </div>

        );
    }
}
export default Dashboard;