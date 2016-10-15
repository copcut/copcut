/**
 * Created by Victor on 10/14/2016.
 */
var Child = React.createClass({
   render: function(){
       return (
        <div>
           {this.props.name}
        </div>
       )
   }
});
module.exports = Child;