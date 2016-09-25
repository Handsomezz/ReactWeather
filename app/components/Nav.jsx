var React=require('react');
var ReactDOM=require('react-dom');
var {Link, IndexLink}=require('react-router');


// var Nav=React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h1>
//                 <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>
//                     Get Weather
//                 </IndexLink>
//         </h1>
//         <h1>
//               <IndexLink to="/about" activeClassName="active" activeStyle={{color:'red'}}>
//                   About
//               </IndexLink>
//         </h1>
//         <h1>
//               <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>
//                   Example
//               </IndexLink>
//         </h1>
//
//
//       </div>
//     );
//   }
// });

var Nav =(props)=>{
  return(
    <div>
      <h1>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                  Get Weather
              </IndexLink>
      </h1>
      <h1>
            <IndexLink to="/about" activeClassName="active" activeStyle={{color:'red'}}>
                About
            </IndexLink>
      </h1>
      <h1>
            <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                Example
            </IndexLink>
      </h1>


    </div>
  );
};

module.exports=Nav;
