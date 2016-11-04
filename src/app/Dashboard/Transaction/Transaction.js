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
                < RecentCut />
                < MoneyMatters totalEarnings = {this.props.totalEarnings} totalAmount = {this.props.totalAmount} mostCutsAday = {this.props.mostCutsAday}/>
                <h1> hello </h1>
            </div>
        );
    }
}
export default Transaction;