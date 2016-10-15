/**
 * Created by Victor on 10/14/2016.
 */
var Child = React.createClass({displayName: "Child",
   render: function(){
       return (
        React.createElement("div", null, 
           this.props.name
        )
       )
   }
});