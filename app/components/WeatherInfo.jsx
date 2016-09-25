var React=require('react');
var ReactDOM=require('react-dom');


// var WeatherInfo=React.createClass({
//   render: function(){
//     var{temp,city}=this.props;
//     return(
//       <div>
//         Its {temp} in {city}
//       </div>
//     );
//   }
// });

//
// var WeatherInfo=(props)=>{
//   var{temp,city}=props;
//   return(
//     <div>
//       Its {temp} in {city}
//     </div>
//   );
// };



var WeatherInfo=({temp,city})=>{
  return(
    <div>
      Its {temp} in {city}
    </div>
  );
};

module.exports=WeatherInfo;
