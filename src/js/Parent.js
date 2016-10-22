/**
 * Created by Victor on 10/14/2016.
 */

let sampleData = [];

var Child = require('./Child');
var Parent = React.createComponent({
    sampleData: {
      barbers: [{
        name,
        cuts: [],

      }]
    },

   render: function(){
       return(
           <div>
               <div>
                   Parent
               </div>
               <div>
                 <filterpanel>
               </div>
               <Child sampleData =sampleData/>
           </div>
       )
   }
});