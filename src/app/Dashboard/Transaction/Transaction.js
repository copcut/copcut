/**
 * Created by Victor on 11/3/2016.
 */
/**
 * Created by Victor on 11/2/2016.
 */
import RecentCut from './RecentCut'
import MoneyMatters from './MoneyMatters'


class Transaction extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var row = [];
        return(
            <div>
                <h1> Transaction Detail </h1>
                < RecentCut />
                < MoneyMatters totalEarnings = {this.props.totalEarnings} totalAmount = {this.props.totalAmount} mostCutsAday = {this.props.mostCutsAday}/>
            </div>
        );
    }
}
export default Transaction;