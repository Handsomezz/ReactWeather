var React=require('react');
var ReactDOM=require('react-dom');
var Nav=require('Nav');


//
// var Main=React.createClass({
//   render: function(){
//     return(
//       <div>
//         <Nav/>
//         Main component
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main=(props)=>{
  return(
    <div>
      <Nav/>
      Main component
      {props.children}
    </div>
  )
}

module.exports=Main;
