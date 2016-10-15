/**
 * Created by Victor on 10/14/2016.
 */
var Parent = React.createComponent({
   render: function(){
       return(
           React.createElement("div", null, 
               React.createElement("div", null, 
                   "Parent"
               ), 
               React.createElement(Child, {name: "helli world"})
           )
       )
   }
});