/**
 * Created by Victor on 10/14/2016.
 */

import Child from "./app/Child.js"
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