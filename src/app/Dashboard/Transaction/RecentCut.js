/**
 * Created by Victor on 11/3/2016.
 */
/**
 * Created by Victor on 11/3/2016.
 */
/**
 * Created by Victor on 11/2/2016.
 */
import IndividualCuts from './IndividualCuts'
var CUTS = [
    {
        user_firstname: "Victor",
        user_lastname: "Cheng",
        date: "10/13/15",
        review: "4",
        key: 1,
        haircut_type: "Normal",
        haircut_price: 13
    },
    {
        user_firstname: "Ankush",
        user_lastname: "Cheng",
        date: "10/13/15",
        review: "4",
        key: 2,
        haircut_type: "Buzzcut",
        haircut_price: 13
    },
    {
        user_firstname: "Danny",
        user_lastname: "Cheng",
        date: "10/13/15",
        review: "4",
        key: 3,
        haircut_type: "Taper",
        haircut_price: 13
    },
];
class RecentCut extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var rows = [];
        CUTS.forEach( (user) => {
            rows.push(
                <IndividualCuts
                    keys = {user.key}
                    firstname = {user.user_firstname}
                    lastname = {user.user_lastname}
                    date = {user.date}
                    haircut_type = {user.haircut_type}
                    haircut_price = {user.haircut_price}
                    review = {user.review}
                />
            );
        });
        return(
            <div>
                <h1> Recent cuts </h1>
                <a href = "#" > View All </a>
                {rows}
            </div>
        );
    }
}
export default RecentCut;