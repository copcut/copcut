/**
 * Created by Victor on 10/14/2016.
 */

var Child = require('./Child');
var Parent = React.createComponent({
   render: function(){
       return(
           <div>
               <div>
                   Parent
               </div>
               <Child name = "helli world"/>
           </div>
       )
   }
});